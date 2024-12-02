"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export function ManageContributionsCard({ assignedTo, projectTitle, taskDescription, taskID, projectID, token }) {
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [declineReason, setDeclineReason] = useState("");
    const [alertMessage, setAlertMessage] = useState(null); // Track alert message
    const [isAlertDialogOpen, setIsAlertDialogOpen] = useState(false); // Track alert dialog state

    const showAlert = (message) => {
        setAlertMessage(message);
        setIsAlertDialogOpen(true);
    };

    const handleApprove = async () => {
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/owner/tasks/${taskID}/status/approve-reject`, {
                method: "PATCH",
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    projectID,
                    status: 2,
                }),
            });

            const data = await response.json();
            if (response.ok) {
                showAlert(data.message);
            } else {
                showAlert(data.message);
            }
        } catch (error) {
            console.error(error);
            showAlert("Error approving task");
        }
    };

    const handleDecline = async () => {
        if (!declineReason) {
            showAlert("Please provide a reason for declining");
            return;
        }

        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/owner/tasks/${taskID}/status/approve-reject`, {
                method: "PATCH",
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    projectID,
                    status: 3,
                    reason: declineReason,
                }),
            });

            const data = await response.json();
            if (response.ok) {
                showAlert(data.message);
            } else {
                showAlert(data.message);
            }
            setIsDialogOpen(false);
        } catch (error) {
            console.error(error);
            showAlert("Error declining task");
        }
    };

    return (
        <>
            <Card className="max-w-2xl">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-2xl font-bold">{projectTitle}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <span className="font-semibold">Contributor:</span>
                            <Badge variant="secondary">{assignedTo}</Badge>
                        </div>
                    </div>
                </CardContent>
                <CardFooter className="flex flex-row items-center justify-end">
                    <button
                        className="bg-red-600 text-white px-2 py-1 rounded"
                        onClick={() => setIsDialogOpen(true)}
                    >
                        Decline
                    </button>
                    <button
                        className="bg-green-600 text-white px-2 py-1 rounded mx-2"
                        onClick={handleApprove}
                    >
                        Accept
                    </button>
                </CardFooter>
            </Card>

            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogContent className="max-w-sm">
                    <DialogHeader>
                        <DialogTitle>Reason for Decline</DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4">
                        <input
                            type="text"
                            placeholder="Enter reason for decline"
                            className="w-full px-3 py-2 border rounded-md"
                            value={declineReason}
                            onChange={(e) => setDeclineReason(e.target.value)}
                        />
                    </div>
                    <DialogFooter>
                        <Button
                            variant="outline"
                            className="bg-red-500 text-white hover:bg-red-600"
                            onClick={() => setIsDialogOpen(false)}
                        >
                            Cancel
                        </Button>
                        <Button className="bg-green-500 text-white hover:bg-green-600" onClick={handleDecline}>
                            Submit
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>

            <Dialog open={isAlertDialogOpen} onOpenChange={setIsAlertDialogOpen}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Notification</DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4">
                        <p>{alertMessage}</p>
                    </div>
                    <DialogFooter>
                        <Button className="bg-blue-500 text-white hover:bg-blue-600" onClick={() => setIsAlertDialogOpen(false)}>
                            OK
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </>
    );
}
