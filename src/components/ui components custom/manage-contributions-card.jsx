"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export function ManageContributionsCard({ title, contributor, datetime, comment }) {
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    return (
        <>
            <Card className="max-w-2xl">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-2xl font-bold">{title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <span className="font-semibold">Contributor:</span>
                            <Badge variant="secondary">{contributor}</Badge>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="font-semibold">Datetime:</span>
                            <div className="flex gap-2">{datetime}</div>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <span className="font-semibold">Contributor Comment:</span>
                        <p className="text-muted-foreground">{comment}</p>
                    </div>
                </CardContent>
                <CardFooter className="flex flex-row items-center justify-end">
                    <button
                        className="bg-red-600 text-white px-2 py-1 rounded"
                        onClick={() => setIsDialogOpen(true)}
                    >
                        Decline
                    </button>
                    <button className="bg-green-600 text-white px-2 py-1 rounded mx-2">Accept</button>
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
                        <Button className="bg-green-500 text-white hover:bg-green-600">
                            Submit
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </>
    );
}
