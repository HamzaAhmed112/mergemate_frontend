"use client"

import { useState } from "react"
import { Check, X } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const projects = [
    {
        id: 1,
        title: "AI-Powered Chat Application",
        difficulty: "HARD",
        techStack: ["Python", "TensorFlow", "React", "Node.js"],
        description: "Develop a chat application that uses AI to understand and respond to user messages, providing intelligent and context-aware conversations.",
    },
    {
        id: 2,
        title: "Blockchain-based Voting System",
        difficulty: "MEDIUM",
        techStack: ["Solidity", "Ethereum", "JavaScript", "Web3.js"],
        description: "Create a secure and transparent voting system using blockchain technology to ensure the integrity of election results.",
    },
    {
        id: 3,
        title: "Augmented Reality Shopping Experience",
        difficulty: "HARD",
        techStack: ["Unity", "C#", "ARKit", "ARCore"],
        description: "Build an AR app that allows users to visualize products in their real environment before making a purchase decision.",
    },
]

export function Explore() {
    const [currentIndex, setCurrentIndex] = useState(0)

    const handleAccept = () => {
        console.log("Accepted project:", projects[currentIndex])
        nextProject()
    }

    const handleReject = () => {
        console.log("Rejected project:", projects[currentIndex])
        nextProject()
    }

    const nextProject = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length)
    }

    const currentProject = projects[currentIndex]

    return (
        <div className="flex flex-col items-center justify-start min-h-screen p-4">
            <h1 className="text-3xl font-bold mb-8">Explore Projects</h1>
            <div className="relative w-full max-w-2xl">
                <Button
                    variant="outline"
                    size="icon"
                    className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 rounded-full z-10 bg-red-600 hover:bg-red-700 "
                    onClick={handleReject}
                >
                    <X className="h-4 w-4 text-white hover:text-white" />
                </Button>
                <Card className="w-full">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-2xl font-bold">{currentProject.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="space-y-2">
                            <div className="flex items-center gap-2">
                                <span className="font-semibold">Difficulty:</span>
                                <Badge variant="secondary">{currentProject.difficulty}</Badge>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="font-semibold">Tech Stack:</span>
                                <div className="flex flex-wrap gap-2">
                                    {currentProject.techStack.map((tech) => (
                                        <Badge key={tech} variant="outline">
                                            {tech}
                                        </Badge>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="space-y-2">
                            <span className="font-semibold">Description:</span>
                            <p className="text-muted-foreground">{currentProject.description}</p>
                        </div>
                    </CardContent>
                </Card>
                <Button
                    variant="outline"
                    size="icon"
                    className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 rounded-full z-10 bg-green-600 hover:bg-green-700"
                    onClick={handleAccept}
                >
                    <Check className="h-4 w-4 text-white hover:text-white" />
                </Button>
            </div>
        </div>
    )
}

