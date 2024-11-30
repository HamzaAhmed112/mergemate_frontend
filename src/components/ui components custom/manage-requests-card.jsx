"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export function ManageRequestsCard({ title, contributor, task, comment }) {

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
                            <h4 className="font-bold hover:cursor-pointer hover:text-blue-500">{contributor}</h4>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="font-semibold">Task:</span>
                            <div className="flex gap-2">{task}</div>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <span className="font-semibold">Contributor Comment:</span>
                        <p className="text-muted-foreground">{comment}</p>
                    </div>
                </CardContent>
                <CardFooter className="flex flex-row items-center justify-end">
                    <button className="bg-red-600 text-white px-2 py-1 rounded">
                        Decline
                    </button>
                    <button className="bg-green-600 text-white px-2 py-1 rounded mx-2">Assign Task</button>
                </CardFooter>
            </Card>

        </>
    );
}
