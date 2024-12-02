"use client";
import { Separator } from "@/components/ui/separator"
import { ThumbsUp, ThumbsDown, Eye, Gauge, Layers } from 'lucide-react'
import { useState } from "react";
import { Check, X, ChevronDown, ChevronUp } from "lucide-react";
import { Card, CardContent, CardHeader, CardFooter, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";

export function Explore({ token, projects }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [alertMessage, setAlertMessage] = useState("");
    const [expandedTaskIndex, setExpandedTaskIndex] = useState(null);
    const [requestedTasks, setRequestedTasks] = useState({}); // Tracks requested tasks by their ID.

    const requestCollaboration = async (token, projectID, taskID, username) => {
        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/user/requests/${projectID}/${taskID}/${username}`, {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
            });

            const data = await res.json();

            if (res.ok && res.status === 200) {
                return true;
            } else {
                setAlertMessage(data.message || "Request Failed");
                return false;
            }
        } catch (error) {
            console.error("Error fetching projects:", error);
            setAlertMessage("Server error when requesting collaboration");
            return false;
        }
    };

    const handleInteraction = async (projectID, state) => {
        try {
            const response = await fetch(
                `${process.env.NEXT_PUBLIC_BACKEND_URL}/user/notification/ld/${projectID}/${state}`,
                {
                    method: "POST",
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "application/json",
                    },
                }
            );

            if (response.ok) {
                alert(state === 1 ? "Project liked!" : "Project disliked!");
            } else {
                const data = await response.json();
                alert(data.message || "Something went wrong!");
            }
        } catch (error) {
            console.error("Error interacting with project:", error);
            alert("Server error occurred!");
        }
    };

    const handleAccept = () => {
        console.log("Accepted project:", projects[currentIndex]);
        nextProject();
    };

    const handleReject = () => {
        console.log("Rejected project:", projects[currentIndex]);
        nextProject();
    };

    const handleViewTasks = () => {
        setIsDialogOpen(true);
    };

    const toggleTaskExpansion = (index) => {
        setExpandedTaskIndex(expandedTaskIndex === index ? null : index);
    };

    const handleRequestCollaboration = async (task, username) => {
        const projectID = projects[currentIndex]._id;
        const success = await requestCollaboration(token, projectID, task._id, username);
        if (success) {
            setRequestedTasks((prev) => ({ ...prev, [task._id]: true })); // Mark task as requested.
        }
    };

    const nextProject = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
        setRequestedTasks({}); // Reset requested state when moving to a new project.
    };

    const currentProject = projects[currentIndex];

    console.log(currentProject)
    return (
        <div className="flex flex-col items-center justify-start min-h-screen p-4">
            <h1 className="text-3xl font-bold mb-8">Explore Projects</h1>
            <div className="relative w-full max-w-2xl">
                <Button
                    variant="outline"
                    size="icon"
                    className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 rounded-full z-10 bg-red-600 hover:bg-red-700"
                    onClick={handleReject}
                >
                    <X className="h-4 w-4 text-white hover:text-white" />
                </Button>
                {/*<Card className="w-full">*/}
                {/*    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">*/}
                {/*        <CardTitle className="text-2xl font-bold">{currentProject.title}</CardTitle>*/}
                {/*    </CardHeader>*/}
                {/*    <CardContent className="space-y-4">*/}
                {/*        <div className="space-y-2">*/}
                {/*            <div className="flex items-center gap-2">*/}
                {/*                <span className="font-semibold">Difficulty:</span>*/}
                {/*                <Badge variant="secondary">{currentProject.difficulty}</Badge>*/}
                {/*            </div>*/}
                {/*            <div className="flex items-center gap-2">*/}
                {/*                <span className="font-semibold">Tech Stack:</span>*/}
                {/*                <div className="flex flex-wrap gap-2">*/}
                {/*                    {currentProject.tech_stack.map((tech) => (*/}
                {/*                        <Badge key={tech} variant="outline">*/}
                {/*                            {tech}*/}
                {/*                        </Badge>*/}
                {/*                    ))}*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*        <div className="space-y-2">*/}
                {/*            <span className="font-semibold">Description:</span>*/}
                {/*            <p className="text-muted-foreground">{currentProject.description}</p>*/}
                {/*        </div>*/}
                {/*    </CardContent>*/}
                {/*    <CardFooter>*/}
                {/*        <Button*/}
                {/*            className="w-full bg-custom-gray  text-white"*/}
                {/*            onClick={handleViewTasks}*/}
                {/*        >*/}
                {/*            View Tasks*/}
                {/*        </Button>*/}
                {/*    </CardFooter>*/}
                {/*</Card>*/}
                <Card className="w-full max-w-md mx-auto overflow-hidden transition-all duration-300 hover:shadow-lg">
                    <CardHeader className="pb-3">
                        <CardTitle className="text-2xl font-bold truncate">{currentProject.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <Gauge className="w-5 h-5 text-yellow-500" />
                                <span className="font-semibold text-sm">Difficulty:</span>
                                <Badge variant="secondary" className="font-medium">
                                    {currentProject.difficulty}
                                </Badge>
                            </div>
                            <div className="flex items-center gap-2">
                                <Layers className="w-5 h-5 text-blue-500" />
                                <span className="font-semibold text-sm">Tech Stack:</span>
                            </div>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {currentProject.tech_stack.map((tech) => (
                                <Badge key={tech} variant="outline" className="text-xs">
                                    {tech}
                                </Badge>
                            ))}
                        </div>
                        <Separator />
                        <div className="space-y-2">
                            <span className="font-semibold text-sm">Description:</span>
                            <p className="text-sm text-muted-foreground line-clamp-3">{currentProject.description}</p>
                        </div>
                    </CardContent>
                    <CardFooter className="flex flex-col gap-3">
                        <Button
                            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                            onClick={handleViewTasks}
                        >
                            <Eye className="w-4 h-4 mr-2" />
                            View Tasks
                        </Button>
                        <div className="flex justify-between w-full">
                            <Button
                                variant="outline"
                                className="flex-1 mr-2"
                                onClick={() => handleInteraction(currentProject._id,0)}
                            >
                                <ThumbsDown className="w-4 h-4 mr-2" />
                                Dislike
                            </Button>
                            <Button
                                variant="outline"
                                className="flex-1 ml-2"
                                onClick={() => handleInteraction(currentProject._id, 1)}
                            >
                                <ThumbsUp className="w-4 h-4 mr-2" />
                                Like
                            </Button>
                        </div>
                    </CardFooter>
                </Card>

                <Button
                    variant="outline"
                    size="icon"
                    className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 rounded-full z-10 bg-green-600 hover:bg-green-700"
                    onClick={handleAccept}
                >
                    <Check className="h-4 w-4 text-white hover:text-white"/>
                </Button>
            </div>

            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Tasks for {currentProject.title}</DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4">
                        {currentProject.tasks.length > 0 ? (
                            currentProject.tasks.map((task, index) => (
                                <div
                                    key={task._id}
                                    className="border p-4 rounded-lg shadow-sm"
                                >
                                    <div className="flex justify-between items-center">
                                        <span className="font-bold">{task.title}</span>
                                        <Button
                                            variant="ghost"
                                            size="icon"
                                            onClick={() => toggleTaskExpansion(index)}
                                        >
                                            {expandedTaskIndex === index ? (
                                                <ChevronUp className="h-5 w-5" />
                                            ) : (
                                                <ChevronDown className="h-5 w-5" />
                                            )}
                                        </Button>
                                    </div>
                                    {expandedTaskIndex === index && (
                                        <div className="mt-2 text-sm text-muted-foreground">
                                            {task.description}
                                        </div>
                                    )}
                                    <Button
                                        className={`mt-2 text-white w-full ${
                                            requestedTasks[task._id] || task.assigned
                                                ? "bg-gray-500 cursor-not-allowed"
                                                : "bg-green-600 hover:bg-green-700"
                                        }`}
                                        onClick={() =>
                                            !requestedTasks[task._id] && !task.assigned && handleRequestCollaboration(task, currentProject.username)
                                        }
                                        disabled={requestedTasks[task._id] || task.assigned}
                                    >
                                        {task.assigned
                                            ? "Already Assigned"
                                            : requestedTasks[task._id]
                                                ? "Requested"
                                                : "Request Collaboration"}
                                    </Button>
                                </div>
                            ))

                        ) : (
                            <p className="text-center text-muted-foreground">No tasks available</p>
                        )}
                    </div>
                    <DialogFooter>
                        <Button
                            className="w-full"
                            variant="outline"
                            onClick={() => setIsDialogOpen(false)}
                        >
                            Close
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>

            {alertMessage && (
                <Dialog open={!!alertMessage} onOpenChange={() => setAlertMessage("")}>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>Alert</DialogTitle>
                        </DialogHeader>
                        <p>{alertMessage}</p>
                        <DialogFooter>
                            <Button
                                className="w-full"
                                variant="outline"
                                onClick={() => setAlertMessage("")}
                            >
                                Close
                            </Button>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>
            )}
        </div>
    );
}
