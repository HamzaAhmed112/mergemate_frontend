"use client"

import {ManageRequests} from "@/components/Manage-Requests";
import {useEffect, useState} from "react";
import Loading from "@/components/loading";

export default function ManageRequestsPage() {
    const [token, setToken] = useState(undefined);
    const [requests, setRequests] = useState(undefined);

    const fetchRequests = async (token) => {

        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/user/requests/collaboration`, {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            })

            const data = await res.json()

            if (res.ok) {
                setRequests(data)
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
            fetchRequests(storageToken)
                .then(r => console.log("Requests fetched"))
                .catch((err) => {
                    console.error('Error getting task:', err);
                })
        }
    }, []);

    if (requests) {
        return (
            <div className="container mx-auto p-6">
                <ManageRequests requests={requests} token={token}/>
            </div>
        )
    } else {
        return <Loading/>
    }
}

