"use client";

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export function ManageRequestsCard({
                                       projectTitle,
                                       requestFrom,
                                       taskTitle,
                                       taskDescription,
                                       onAssignTask,
                                       onDeclineTask,
                                       loading,
                                   }) {
    return (
        <Card className="max-w-2xl">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-2xl font-bold">{projectTitle}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="space-y-2">
                    <div className="flex items-center gap-2">
                        <span className="font-semibold">Contributor:</span>
                        <h4 className="font-bold hover:cursor-pointer hover:text-blue-500">{requestFrom}</h4>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="font-semibold">Task Title:</span>
                        <div className="flex gap-2">{taskTitle}</div>
                    </div>
                </div>
                <div className="space-y-2">
                    <span className="font-semibold">Task Description:</span>
                    <p className="text-muted-foreground">{taskDescription}</p>
                </div>
            </CardContent>
            <CardFooter className="flex flex-row items-center justify-end">
                <button
                    onClick={onDeclineTask} // Bind decline functionality
                    disabled={loading}
                    className="bg-red-600 text-white px-2 py-1 rounded"
                >
                    {loading ? "Declining..." : "Decline"}
                </button>
                <button
                    onClick={onAssignTask} // Use the passed prop here
                    disabled={loading}
                    className="bg-green-600 text-white px-2 py-1 rounded mx-2"
                >
                    {loading ? "Assigning..." : "Assign Task"}
                </button>
            </CardFooter>
        </Card>
    );
}
