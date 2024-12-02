"use client"

import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import {ManageContributionsCard} from "@/components/ui components custom/manage-contributions-card";

const contributionsList = [
    {
        title: "Image recreation with GA",
        contributor: "Hamza",
        Datetime: "30th Nov 2024",
        comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin aliquam, nisl a tempor interdum, sapien magna eleifend ex, at vulputate nisi neque a odio. Fusce suscipit, risus sed lacinia egestas, arcu felis feugiat erat, et fermentum metus nunc at nunc.",
    },
    {
        title: "Image recreation with GA",
        contributor: "Hamza",
        Datetime: "30th Nov 2024",
        comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin aliquam, nisl a tempor interdum, sapien magna eleifend ex, at vulputate nisi neque a odio. Fusce suscipit, risus sed lacinia egestas, arcu felis feugiat erat, et fermentum metus nunc at nunc.",
    }
]

export function ManageContributions( {contributionCardData, token}) {
    return (
        <div className="space-y-4">
            <h1 className="text-2xl font-bold">Manage Contributions</h1>
            <Separator />
            <ScrollArea className="h-[calc(100vh-200px)] rounded-md border p-4">
                <div className="space-y-4">
                    {contributionCardData.map((project, index) => (
                        <ManageContributionsCard key={index} {...project} token={token} />
                    ))}
                </div>
            </ScrollArea>
        </div>
    )
}

