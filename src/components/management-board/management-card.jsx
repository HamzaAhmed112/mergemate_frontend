import { useSortable } from "@dnd-kit/sortable"
import { CSS } from "@dnd-kit/utilities"
import { Card, CardContent } from "@/components/ui/card"

export function ManagementCard({ task, isDragging }) {
    console.log("task")
    console.log(task)
    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition,
    } = useSortable({ id: task.id })

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
    }

    return (
        <Card
            ref={setNodeRef}
            style={style}
            {...attributes}
            {...listeners}
            className={`cursor-grab ${isDragging ? "opacity-50" : ""}`}
        >
            <CardContent className="p-4">
                <p>{task.title}</p>
            </CardContent>
        </Card>
    )
}

