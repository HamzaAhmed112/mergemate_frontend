"use client";

import { Suspense, useState, useEffect } from "react";
import LoginForm from "@/components/LoginForm";
import { useRouter, useSearchParams } from "next/navigation";
import Loading from "@/components/loading";

export default function LoginPage() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [token, setToken] = useState(undefined);

    useEffect(() => {
        const tokenFromStorage = localStorage.getItem("token");
        if (tokenFromStorage) {
            router.replace("/home/my-projects");
        }
    }, [searchParams, router]);

    console.log(token);

    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-100">
            <div className="w-full max-w-md">
                <h1 className="mb-8 text-center text-4xl font-bold text-gray-900">MergeMate</h1>
                <Suspense fallback={<Loading />}>
                    <LoginForm />
                </Suspense>
            </div>
        </div>
    );
}
