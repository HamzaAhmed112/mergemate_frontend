'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Github } from 'lucide-react'
import Link from "next/link";
import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";

export default function LoginForm() {
    const handleGitHubLogin = async () => {
        window.location.href = process.env.NEXT_PUBLIC_BACKEND_AUTH_ROUT;
    }

    return (
        <Card>
            <CardHeader className="flex flex-col items-center justify-end">
                <CardTitle>Welcome back</CardTitle>
                <CardDescription>Sign in to your account to continue</CardDescription>
            </CardHeader>
            <CardContent>
                <Link href="">
                    <Button onClick={handleGitHubLogin} className="w-full text-white bg-green-600 hover:bg-green-700 hover:text-white" variant="outline">
                        <Github className="mr-2 h-4 w-4 text-white" />
                        Sign in with GitHub
                    </Button>
                </Link>
            </CardContent>

        </Card>
    )
}

