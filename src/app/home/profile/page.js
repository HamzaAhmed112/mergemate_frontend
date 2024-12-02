"use client"

import { ProfileView } from "../../../components/profile-view"
import {useEffect, useState} from "react";


export default function ProfilePage() {
    const [token, setToken] = useState(undefined);
    useEffect(() => {
        const storageToken = localStorage.getItem("token");
        if (storageToken) {
            setToken(storageToken);
        }
    })
    console.log(token);
    if (token) {
        return <ProfileView token={token} />
    }
}

