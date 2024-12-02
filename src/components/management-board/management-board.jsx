"use client";
import { useEffect, useState } from "react";
import { ManagementColumn } from "./management-column";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";

export function ManagementBoard({ projectId, token, projectDetails }) {
    console.log(projectDetails);
    const [tasks, setTasks] = useState({
        todo: [],
        "in-progress": [],
        completed: [],
    });
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [newTask, setNewTask] = useState({ task_title: "", task_description: "" });

    useEffect(() => {
        if (projectDetails) {
            const initializedTasks = projectDetails.tasks.reduce(
                (acc, task) => {
                    switch (task.status) {
                        case 0: // TODO
                            acc.todo.push({
                                id: task._id,
                                title: task.title,
                                description: task.description,
                            });
                            break;
                        case 1: // In Progress
                            acc["in-progress"].push({
                                id: task._id,
                                title: task.title,
                                description: task.description,
                            });
                            break;
                        case 2: // Completed
                            acc.completed.push({
                                id: task._id,
                                title: task.title,
                                description: task.description,
                            });
                            break;
                        default:
                            break;
                    }
                    return acc;
                },
                { todo: [], "in-progress": [], completed: [] } // Initial state
            );

            setTasks(initializedTasks);
        }
    }, [projectDetails]);

    const handleAddTask = async () => {
        if (!newTask.task_title.trim()) return;

        try {
            const res = await fetch(
                `${process.env.NEXT_PUBLIC_BACKEND_URL}/user/projects/${projectId}/tasks`,
                {
                    method: "POST",
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        title: newTask.task_title,
                        description: newTask.task_description,
                    }),
                }
            );

            const data = await res.json();

            if (res.ok) {
                console.log(data.task);
                setTasks((prev) => ({
                    ...prev,
                    todo: [...prev.todo, data.task],
                }));
                setNewTask({ task_title: "", task_description: "" });
                setIsDialogOpen(false);
            } else {
                alert(data.message || "Failed to add task");
            }
        } catch (error) {
            console.error("Error adding task:", error);
            alert("An error occurred while adding the task");
        }
    };

    return (
        <div className="p-8">
            <h1 className="text-3xl font-bold text-center mb-8">Image Recreation With Genetic Algorithm</h1>
            <div className="flex gap-4 overflow-x-auto pb-4">
                <div className="flex gap-4">
                    <ManagementColumn
                        id="todo"
                        title="TODO"
                        tasks={tasks.todo}
                        onAddTask={() => setIsDialogOpen(true)}
                    />
                    <ManagementColumn
                        id="in-progress"
                        title="In Progress"
                        tasks={tasks["in-progress"]}
                    />
                    <ManagementColumn
                        id="completed"
                        title="Completed"
                        tasks={tasks.completed}
                    />
                </div>
            </div>

            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Add New Task</DialogTitle>
                    </DialogHeader>
                    <div className="py-4">
                        <Input
                            placeholder="Enter task title"
                            value={newTask.task_title}
                            onChange={(e) =>
                                setNewTask({ ...newTask, task_title: e.target.value })
                            }
                        />
                    </div>
                    <div className="py-4">
                        <Input
                            placeholder="Enter task description"
                            value={newTask.task_description}
                            onChange={(e) =>
                                setNewTask({ ...newTask, task_description: e.target.value })
                            }
                        />
                    </div>
                    <DialogFooter>
                        <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
                            Cancel
                        </Button>
                        <Button onClick={handleAddTask}>Add Task</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    );
}
