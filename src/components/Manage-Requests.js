"use client";

import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { ManageRequestsCard } from "@/components/ui components custom/manage-requests-card";
import { useState } from "react";

export function ManageRequests({ requests, token }) {
    const [loading, setLoading] = useState(false);

    const declineTask = async (taskID, username) => {
        setLoading(true);
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/owner/decline-task`, {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    taskID,
                    username,
                }),
            });

            if (response.ok) {
                const data = await response.json();
                alert(data.message);
                // Optional: Refresh the list or update UI here
            } else {
                const errorData = await response.json();
                alert(`Error: ${errorData.message}`);
            }
        } catch (error) {
            alert("An error occurred while declining the task.");
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    const assignTask = async (taskID, username) => {
        setLoading(true);
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/owner/assign-task`, {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    taskID,
                    username,
                }),
            });

            if (response.ok) {
                const data = await response.json();
                alert(data.message);
                // Optional: Refresh the list or update UI here
            } else {
                const errorData = await response.json();
                alert(`Error: ${errorData.message}`);
            }
        } catch (error) {
            alert("An error occurred while assigning the task.");
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="space-y-4">
            {requests.map((request, index) => (
                <ManageRequestsCard
                    key={index}
                    projectTitle={request.projectTitle}
                    requestFrom={request.requestFrom}
                    taskTitle={request.taskTitle}
                    taskDescription={request.taskDescription}
                    onAssignTask={() => assignTask(request.taskID, request.requestFrom)}
                    onDeclineTask={() => declineTask(request.taskID, request.requestFrom)}
                    loading={loading}
                />
            ))}
        </div>
    );
}
