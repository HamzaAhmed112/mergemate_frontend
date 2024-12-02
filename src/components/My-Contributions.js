"use client"

import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import {ContributionCard} from "@/components/ui components custom/contribution-card";
import {useState} from "react";


export function MyContributions({ contributionsList, token }) {
    const [contributions, setContributions] = useState(contributionsList);

    const updateTaskStatus = (taskID, newStatus) => {
        setContributions((prevContributions) => {
            return prevContributions.map((project) => {

                return {
                    ...project,
                    tasks: (project.taskID === taskID ? { ...project, status: newStatus } : project),
                };
            });
        });
    };

    return (
        <div className="space-y-4">
            <h1 className="text-2xl font-bold">My Contributions</h1>
            <Separator />
            <ScrollArea className="h-[calc(100vh-200px)] rounded-md border p-4">
                <div className="space-y-4">
                    {contributions.map((project, index) => (
                        <ContributionCard
                            key={index}
                            {...project}
                            token={token}
                            updateTaskStatus={updateTaskStatus}
                        />
                    ))}
                </div>
            </ScrollArea>
        </div>
    );
}

