import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";


export function ContributionCard({
                                     title,
                                     difficulty,
                                     tech_stack,
                                     taskTitle,
                                     taskDescription,
                                     status,
                                     taskID,
                                     projectID,
                                     token,
                                     updateTaskStatus,  // New prop
                                 }) {
    const getButtonProps = () => {
        if (status === 0) {
            return { text: "Mark as Completed", disabled: false, className: "bg-green-600 text-white px-2 py-1 rounded" };
        } else if (status === 1) {
            return { text: "Waiting Approval", disabled: true, className: "bg-yellow-500 text-white px-2 py-1 rounded cursor-not-allowed" };
        } else if (status === 2) {
            return { text: "Completed", disabled: true, className: "bg-gray-500 text-white px-2 py-1 rounded cursor-not-allowed" };
        } else if (status === 3) {
            return { text: "Rejected", disabled: true, className: "bg-red-500 text-white px-2 py-1 rounded cursor-not-allowed" };
        }
    };

    const { text, disabled, className } = getButtonProps();

    const handleMarkAsCompleted = async (taskID, projectID) => {
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/user/tasks/${taskID}/status`, {
                method: "PATCH",
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ projectID }),
            });

            if (!response.ok) {
                throw new Error("Failed to update task status");
            }

            const data = await response.json();
            console.log("Task status updated successfully:", data);

            // Immediately update the status in the UI
            updateTaskStatus(taskID, 2); // Assuming 2 is the 'Completed' status
        } catch (error) {
            console.error("Error updating task status:", error);
        }
    };

    return (
        <Card className="w-full">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-2xl font-bold">{title}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="space-y-2">
                    <div className="flex items-center gap-2">
                        <span className="font-semibold">Difficulty:</span>
                        <Badge variant="secondary">{difficulty}</Badge>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="font-semibold">Tech Stack:</span>
                        <div className="flex gap-2">
                            {tech_stack.map((tech) => (
                                <Badge key={tech} variant="outline">
                                    {tech}
                                </Badge>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="space-y-2">
                    <span className="font-semibold">
                        Task: <span className="text-muted-foreground">{taskTitle}</span>
                    </span>
                </div>
                <div className="space-y-2">
                    <span className="font-semibold">Description:</span>
                    <p className="text-muted-foreground">{taskDescription}</p>
                </div>
            </CardContent>
            <CardFooter>
                <button
                    disabled={disabled}
                    className={className}
                    onClick={status === 0 ? () => handleMarkAsCompleted(taskID, projectID) : undefined}
                >
                    {text}
                </button>
            </CardFooter>
        </Card>
    );
}
