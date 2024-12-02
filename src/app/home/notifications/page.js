"use client";

import { ScrollArea } from "@/components/ui/scroll-area";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useEffect, useState } from "react";
import { SessionExpired } from "@/components/LoginExpired";

export default function NotificationScreen() {
    const [token, setToken] = useState(undefined);
    const [notifications, setNotifications] = useState([]);

    async function getUserNotifications(token) {
        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/user/notifications/get`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            if (res.ok) {
                const data = await res.json();
                setNotifications(data);
            } else {
                const error = await res.json();
                alert(error.message || "Failed to fetch notifications");
            }
        } catch (error) {
            console.error("Error fetching notifications:", error);
        }
    }

    useEffect(() => {
        const storageToken = localStorage.getItem("token");

        if (storageToken) {
            setToken(storageToken);

            // Fetch notifications only if the token is available
            getUserNotifications(storageToken);
        }
    }, []); // Empty dependency array ensures it runs only once


    console.log(notifications);

    if (!token) {
        return <SessionExpired />;
    }

    if (notifications.length === 0) {
        return (
            <div className="flex items-center justify-center h-screen">
                <p className="text-center text-lg">No notifications available</p>
            </div>
        );
    }

    return (
        <Card className="w-full mx-auto">
            <CardHeader>
                <CardTitle>Notifications</CardTitle>
            </CardHeader>
            <CardContent>
                <ScrollArea className="h-full w-full rounded-md border p-4 my-1">
                    {notifications.map((notification, index) => (
                        <div
                            key={index}
                            className="mb-4 p-3 bg-secondary rounded-lg last:mb-0"
                        >
                            <p className="text-sm">{notification.message}</p>
                        </div>
                    ))}
                </ScrollArea>
            </CardContent>
        </Card>
    );
}
