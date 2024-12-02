"use client"

import {useEffect, useState} from "react"
import {Button} from "@/components/ui/button"
import {ScrollArea} from "@/components/ui/scroll-area"
import {Separator} from "@/components/ui/separator"
import {PlusCircle} from 'lucide-react'
import {AddProjectDialog} from "@/components/Add-Project-Dialog"
import {ProjectCard} from "@/components/ui components custom/project-card"
import Loading from "@/components/loading";

export function MyProjects({token}) {
    const [isDialogOpen, setIsDialogOpen] = useState(false)
    const [userProjects, setUserProjects] = useState(undefined)
    const [userRepos, setUserRepos] = useState(undefined)


    async function getUserProjects(token) {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/owner/get`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        const data = await res.json()
        setUserProjects(data.projects)
        setUserRepos(data.repos)
    }

    useEffect(() => {
        getUserProjects(token).then(r => console.log("successful"))
    }, [])

    console.log("user projects")
    console.log(userProjects)

    if (userProjects) {
        const projectCards = [];
        for (let i = 0; i < userProjects.length; i++) {
            projectCards.push(<ProjectCard key={i} {...userProjects[i]} />);
        }

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
                    {userProjects.length > 0 ? (
                        projectCards
                    ) : (
                        <div>Loading...</div>
                    )}
                </ScrollArea>
                <AddProjectDialog open={isDialogOpen} onOpenChange={setIsDialogOpen} repos={userRepos} />
            </div>
        );
    } else {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
                <div className="text-center">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                        No Projects Yet
                    </h2>
                    <p className="text-gray-600 mb-6">
                        It looks like you haven’t started any projects. Let’s change that!. Create a project by clicking on the top right button
                    </p>
                </div>
            </div>
        );

    }
}
