"use client"

import { MyProjects } from "@/components/My-Projects"
import {useEffect, useState} from "react";
import Loading from "@/components/loading";
import {SessionExpired} from "@/components/LoginExpired";

export default function MyProjectsPage() {
    const [token, setToken] = useState(undefined);
    useEffect(() => {
        const storageToken = localStorage.getItem("token");
        if (storageToken) {
            setToken(storageToken);
        }
    })
    if (token) {
        return (
            <div className="container mx-auto p-6">
                <MyProjects token={token} />
            </div>
        )
    } else {
            return (
               <SessionExpired/>
            )
        }
}

