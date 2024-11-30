"use client"

import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { ProjectCard } from "@/components/ui components custom/project-card"
import {ContributionCard} from "@/components/ui components custom/contribution-card";

const contributionsList = [
    {
        title: "Image recreation with GA",
        difficulty: "HARD",
        techStack: ["JavaScript", "HTML", "CSS"],
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin aliquam, nisl a tempor interdum, sapien magna eleifend ex, at vulputate nisi neque a odio. Fusce suscipit, risus sed lacinia egestas, arcu felis feugiat erat, et fermentum metus nunc at nunc.",
        status: "success"
    },
    {
        title: "React Component Library",
        difficulty: "MEDIUM",
        techStack: ["React", "TypeScript", "Storybook"],
        description: "Create a reusable component library for React applications with TypeScript support and Storybook documentation.",
        status: "error"
    },
    {
        title: "API Integration Service",
        difficulty: "EASY",
        techStack: ["Node.js", "Express", "MongoDB"],
        description: "Develop a service to integrate multiple third-party APIs and provide a unified interface for client applications.",
        status: "success"
    }
]

export function MyContributions() {
    return (
        <div className="space-y-4">
            <h1 className="text-2xl font-bold">My Contributions</h1>
            <Separator />
            <ScrollArea className="h-[calc(100vh-200px)] rounded-md border p-4">
                <div className="space-y-4">
                    {contributionsList.map((project, index) => (
                        <ContributionCard key={index} {...project} />
                    ))}
                </div>
            </ScrollArea>
        </div>
    )
}

