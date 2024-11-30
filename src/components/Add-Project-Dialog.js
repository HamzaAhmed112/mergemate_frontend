"use client"

import { useState } from "react"

export function AddProjectDialog({ open, onOpenChange }) {
    const [selectedTechStack, setSelectedTechStack] = useState([])
    const [projectName, setProjectName] = useState("")
    const [repository, setRepository] = useState("")
    const [contributor, setDifficulty] = useState("")
    const [comment, setDescription] = useState("")

    const handleTechStackChange = (tech) => {
        if (selectedTechStack.includes(tech)) {
            setSelectedTechStack(selectedTechStack.filter((item) => item !== tech))
        } else {
            setSelectedTechStack([...selectedTechStack, tech])
        }
    }

    return (
        open && (
            <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center">
                <div className="bg-white p-8 rounded-lg shadow-lg w-[600px]">
                    <h2 className="text-2xl font-semibold mb-4">Add New Project</h2>
                    <p className="text-gray-600 mb-6">Create a new project by filling out the details below.</p>

                    <form>
                        <div className="mb-4">
                            <label htmlFor="project-name" className="block text-lg font-medium mb-2">
                                Project Name
                            </label>
                            <input
                                id="project-name"
                                type="text"
                                className="w-full p-2 border border-gray-300 rounded-md"
                                value={projectName}
                                onChange={(e) => setProjectName(e.target.value)}
                                placeholder="Enter project name"
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="repository" className="block text-lg font-medium mb-2">
                                Repository
                            </label>
                            <select
                                id="repository"
                                className="w-full p-2 border border-gray-300 rounded-md"
                                value={repository}
                                onChange={(e) => setRepository(e.target.value)}
                            >
                                <option value="">Select repository</option>
                                <option value="repo1">Repository 1</option>
                                <option value="repo2">Repository 2</option>
                                <option value="repo3">Repository 3</option>
                            </select>
                        </div>

                        <div className="mb-4">
                            <label htmlFor="contributor" className="block text-lg font-medium mb-2">
                                Difficulty
                            </label>
                            <select
                                id="contributor"
                                className="w-full p-2 border border-gray-300 rounded-md"
                                value={contributor}
                                onChange={(e) => setDifficulty(e.target.value)}
                            >
                                <option value="">Select contributor</option>
                                <option value="easy">Easy</option>
                                <option value="medium">Medium</option>
                                <option value="hard">Hard</option>
                            </select>
                        </div>

                        <div className="mb-4">
                            <label htmlFor="tech-stack" className="block text-lg font-medium mb-2">
                                Tech Stack
                            </label>
                            <div className="flex flex-wrap gap-4">
                                {["react", "nextjs", "typescript", "node"].map((tech) => (
                                    <label key={tech} className="cursor-pointer flex items-center">
                                        <input
                                            type="checkbox"
                                            checked={selectedTechStack.includes(tech)}
                                            onChange={() => handleTechStackChange(tech)}
                                            className="mr-2"
                                        />
                                        {tech}
                                    </label>
                                ))}
                            </div>
                        </div>

                        <div className="mb-4">
                            <label htmlFor="comment" className="block text-lg font-medium mb-2">
                                Description
                            </label>
                            <textarea
                                id="comment"
                                className="w-full p-2 border border-gray-300 rounded-md"
                                value={comment}
                                onChange={(e) => setDescription(e.target.value)}
                                placeholder="Enter project comment"
                            />
                        </div>

                        <div className="flex justify-end gap-4">
                            <button
                                type="button"
                                onClick={() => onOpenChange(false)}
                                className="py-2 px-6 bg-gray-200 rounded-md hover:bg-gray-300"
                            >
                                Cancel
                            </button>
                            <button
                                type="submit"
                                className="py-2 px-6 bg-green-600 text-white rounded-md hover:bg-green-700"
                            >
                                Save
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        )
    )
}