import React from 'react';
import { Button } from "@/components/ui/button";

export function SessionExpired() {
    const handleLoginRedirect = () => {
        window.location.href = '/login';
    };

    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                <h2 className="text-2xl font-semibold text-red-600">Session Expired</h2>
                <p className="mt-4 text-lg text-gray-700">
                    Your login session has expired. Please log in again to continue.
                </p>
                <Button
                    variant="default"
                    onClick={handleLoginRedirect}
                    className="mt-6 bg-blue-600 text-white"
                >
                    Login Again
                </Button>
            </div>
        </div>
    );
}
