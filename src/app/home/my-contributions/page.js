"use client"

import { MyContributions } from "@/components/My-Contributions"
import {useEffect, useState} from "react";
import Loading from "@/components/loading";

export default function MyContributionsPage() {
    const [token, setToken] = useState(undefined);
    const [contributionsList, setContributionsList] = useState(undefined);

    const fetchMyContributions = async (token) => {
        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/user/contributions/get`, {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
            });

            const data = await res.json();
            console.log("data")
            console.log(data)

            if (res.ok) {
                setContributionsList(data)
            } else {
                console.log(res.status);
                console.log(res);
                alert(data.message || "Failed to fetch project details");
            }
        } catch (error) {
            console.error("Error fetching projects:", error);
            alert("An error occurred while fetching the projects");
        }
    };

    useEffect(() => {
        const storageToken = localStorage.getItem("token");

        if (storageToken) {
            setToken(storageToken)
            fetchMyContributions(storageToken)
                .then(() => console.log("Project details fetched"))
                .catch((err) => {
                    console.error("Error fetching projects:", err);
                });
        }
    }, []);

    if (contributionsList) {
        return (
            <div className="container mx-auto p-6">
                <MyContributions contributionsList={contributionsList} token={token} />
            </div>
        )
    } else {
        return <Loading/>
    }
}

