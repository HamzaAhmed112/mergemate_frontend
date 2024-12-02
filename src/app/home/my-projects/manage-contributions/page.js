"use client"

import {ManageContributions} from "@/components/Manage-Contributions";
import {useEffect, useState} from "react";
import Loading from "@/components/loading";

export default function ManageContributionsPage() {
    const [token, setToken] = useState(undefined);
    const [waitingWork, setWaitingWork] = useState(undefined);

    const fetchWaiting = async (token) => {

        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/user/tasks/approval-pending`, {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            })

            const data = await res.json()

            if (res.ok) {
                setWaitingWork(data)
            } else {
                console.log(res.status)
                alert(data.message || 'Could not retrieve requests')
            }
        } catch (error) {
            console.error('Error adding task:', error)
            alert('An error occurred while trying to get requests')
        }
    }

    useEffect(() => {
        const storageToken = localStorage.getItem("token");
        if (storageToken) {
            setToken(storageToken);
        }

        if (storageToken) {
            fetchWaiting(storageToken)
                .then(r => console.log("Requests fetched"))
                .catch((err) => {
                    console.error('Error getting task:', err);
                })
        }
    }, []);

    console.log(waitingWork)
    if (waitingWork) {
        return (
            <div className="container mx-auto p-6">
                <ManageContributions contributionCardData={waitingWork} token={token}/>
            </div>
        )
    } else {
        return <Loading/>
    }
}

