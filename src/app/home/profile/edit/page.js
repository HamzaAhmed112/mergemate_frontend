"use client"

import { EditProfileForm } from "../../../../components/edit-profile-form"
import {useEffect, useState} from "react";
import Loading from "../../../../components/loading";

export default function EditProfilePage() {
    const [token, setToken] = useState(undefined);
    useEffect(() => {
        const storageToken = localStorage.getItem("token");
        if (storageToken) {
            setToken(storageToken);
        }
    })
    if (token) {
        return <EditProfileForm token={token}/>
    } else {
        return <Loading/>
    }
}

