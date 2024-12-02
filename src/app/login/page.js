"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import LoginForm from "@/components/LoginForm";
import Loading from "@/components/loading";

function LoginWrapper() {
    const router = useRouter();
    const [token, setToken] = useState(undefined);

    useEffect(() => {
        const tokenFromStorage = localStorage.getItem("token");
        if (tokenFromStorage) {
            router.replace("/home/my-projects");
        }
    }, [router]);

    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-100">
            <div className="w-full max-w-md">
                <h1 className="mb-8 text-center text-4xl font-bold text-gray-900">MergeMate</h1>
                <LoginForm />
            </div>
        </div>
    );
}

export default function LoginPage() {
    return (
        <div>
            <LoginWrapper />
        </div>
    );
}
