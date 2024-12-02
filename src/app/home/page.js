"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { MyProjects } from "@/components/My-Projects";

export default function MyProjectsPage() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [token, setToken] = useState(null);


    useEffect(() => {
        const tokenFromStorage = localStorage.getItem("token");
        setToken(tokenFromStorage)
        if (!tokenFromStorage) {
            const tokenFromUrl = searchParams.get("token");

            if (tokenFromUrl) {
                localStorage.setItem("token", tokenFromUrl);
                setToken(tokenFromUrl); // Update the state with the new token

                router.replace("/home");
            } else {
                const storedToken = localStorage.getItem("token");

                if (storedToken) {
                    setToken(storedToken);
                } else {
                    console.log("Token not found");
                    router.replace("/login");
                }
            }
        }
    }, [searchParams, router]);

    console.log(token);

    if (token) {
        return (
            <div className="flex-1 p-6 bg-gray-50">
                <MyProjects token={token} />
            </div>
        );
    }
}
