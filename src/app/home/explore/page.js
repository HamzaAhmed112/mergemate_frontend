"use client";

import { Explore } from "@/components/explore";
import Cookies from "js-cookie";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";

function storeToken(token) {
    Cookies.set("auth_token", token, {
        expires: 7,
        sameSite: "strict",
    });
}

export default function ExplorePage() {
    const router = useRouter();
    const searchParams = useSearchParams(); // To access URL query params

    // Extract the token from the URL query params
    const token = searchParams.get("token");

    useEffect(() => {
        // Redirect to login if no token is present
        if (!token) {
            router.replace("/login");
        } else {
            storeToken(token); // Store token in cookies
        }
    }, [token, router]); // Effect runs whenever token or router changes

    return <Explore />;
}
