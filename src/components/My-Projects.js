"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { PlusCircle } from 'lucide-react'
import { AddProjectDialog } from "@/components/add-project-dialog"
import {ProjectCard} from "@/components/ui components custom/project-card";


const projectsList = [
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

export function MyProjects() {
    const [isDialogOpen, setIsDialogOpen] = useState(false)

    return (
        <div className="flex flex-col h-full space-y-4">
            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold">My Projects</h1>
                <Button onClick={() => setIsDialogOpen(true)} className="bg-green-500 hover:bg-green-600">
                    <PlusCircle className="mr-2 h-4 w-4" /> Add Project
                </Button>
            </div>
            <Separator />
            <ScrollArea className="flex-1 h-full rounded-md border p-4 overflow-auto">
                {projectsList.map((project, index) => (
                    <ProjectCard key={index} {...project} />
                ))}
            </ScrollArea>
            <AddProjectDialog open={isDialogOpen} onOpenChange={setIsDialogOpen} />
        </div>
    )
}
