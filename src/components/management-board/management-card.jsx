import { Card, CardContent } from "@/components/ui/card";

export function ManagementCard({ task, isDragging }) {
    console.log("task");
    console.log(task);

    return (
        <Card className={`cursor-grab ${isDragging ? "opacity-50" : ""}`}>
            <CardContent className="p-4">
                <p>{task.title}</p>
            </CardContent>
        </Card>
    );
}
