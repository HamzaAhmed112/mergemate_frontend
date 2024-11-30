"use client"

import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import {ManageRequestsCard} from "@/components/ui components custom/manage-requests-card";

const contributionsList = [
    {
        title: "Image recreation with GA",
        contributor: "Hamza",
        task: "Improve Speed",
        comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin aliquam, nisl a tempor interdum, sapien magna eleifend ex, at vulputate nisi neque a odio. Fusce suscipit, risus sed lacinia egestas, arcu felis feugiat erat, et fermentum metus nunc at nunc.",
    },
    {
        title: "Image recreation with GA",
        contributor: "Hamza",
        task: "Reduce Lag",
        comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin aliquam, nisl a tempor interdum, sapien magna eleifend ex, at vulputate nisi neque a odio. Fusce suscipit, risus sed lacinia egestas, arcu felis feugiat erat, et fermentum metus nunc at nunc.",
    }
]

export function ManageRequests() {
    return (
        <div className="space-y-4">
            <h1 className="text-2xl font-bold">Manage Contributions</h1>
            <Separator />
            <ScrollArea className="h-[calc(100vh-200px)] rounded-md border p-4">
                <div className="space-y-4">
                    {contributionsList.map((project, index) => (
                        <ManageRequestsCard key={index} {...project} />
                    ))}
                </div>
            </ScrollArea>
        </div>
    )
}

