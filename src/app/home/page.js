"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState, Suspense } from "react";
import { MyProjects } from "@/components/My-Projects";
import Loading from "@/components/loading";
import {SessionExpired} from "@/components/LoginExpired";

function MyProjectsPageContent() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [token, setToken] = useState(null);

    useEffect(() => {
        const tokenFromStorage = localStorage.getItem("token");
        setToken(tokenFromStorage);

        if (!tokenFromStorage) {
            const tokenFromUrl = searchParams.get("token");

            if (tokenFromUrl) {
                localStorage.setItem("token", tokenFromUrl);
                setToken(tokenFromUrl); // Update the state with the new token

                router.replace("/home/my-projects");
            } else {
                const storedToken = localStorage.getItem("token");

                if (tokenFromStorage) {
                    setToken(tokenFromStorage);
                } else {
                    console.log("Token not found");
                    router.replace("/login");
                }
            }
        }
    }, [searchParams, router]);

    console.log(token);

    if (!token) {
        return <SessionExpired/>
    } else {
        router.replace("/home/my-projects");
    }

}

export default function MyProjectsPage() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <MyProjectsPageContent />
        </Suspense>
    );
}
