import { useDroppable } from "@dnd-kit/core"
import { SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable"
import { ManagementCard } from "./management-card"
import { Button } from "@/components/ui/button"
import { Plus } from 'lucide-react'

export function ManagementColumn({ id, title, tasks, onAddTask }) {
    const { setNodeRef } = useDroppable({ id })

    return (
        <div className="w-80 shrink-0">
            <div className="mb-3 flex items-center justify-between">
                <h2 className="text-xl font-semibold">{title}</h2>
                <span className="rounded-full bg-gray-200 px-2 py-1 text-sm">
          {tasks.length}
        </span>
            </div>
            <div
                ref={setNodeRef}
                className="flex flex-col gap-2 rounded-lg bg-gray-100 p-4 min-h-[500px]"
            >
                <SortableContext items={tasks} strategy={verticalListSortingStrategy}>
                    {tasks.map((task) => (
                        <ManagementCard key={task.id} task={task} />
                    ))}
                </SortableContext>
                {id === "todo" && (
                    <Button
                        variant="outline"
                        className="mt-2 w-full border-2 border-dashed"
                        onClick={onAddTask}
                    >
                        <Plus className="mr-2 h-4 w-4" />
                        Add Task
                    </Button>
                )}
            </div>
        </div>
    )
}
