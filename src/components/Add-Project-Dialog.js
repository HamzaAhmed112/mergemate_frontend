"use client";

import { useState } from "react";

export function AddProjectDialog({ open, onOpenChange, repos }) {
    const [selectedTechStack, setSelectedTechStack] = useState([]);
    const [projectName, setProjectName] = useState("");
    const [repository, setRepository] = useState("");
    const [difficulty, setDifficulty] = useState("");
    const [description, setDescription] = useState("");

    const handleTechStackChange = (tech) => {
        if (selectedTechStack.includes(tech)) {
            setSelectedTechStack(selectedTechStack.filter((item) => item !== tech));
        } else {
            setSelectedTechStack([...selectedTechStack, tech]);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const token = localStorage.getItem("token"); // Retrieve token for authorization
        const projectData = {
            title: projectName,
            repository,
            difficulty: difficulty || "Easy",
            tech_stack: selectedTechStack,
            description: description || "None",
        };

        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/owner/create/project`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`, // Add authorization header
                },
                body: JSON.stringify(projectData),
            });

            if (response.ok) {
                const data = await response.json();
                console.log("Project created:", data);
                onOpenChange(false); // Close dialog on success
            } else {
                console.error("Failed to create project:", await response.text());
            }
        } catch (error) {
            console.error("Error creating project:", error);
        }
    };

    return (
        open && (
            <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center">
                <div className="bg-white p-8 rounded-lg shadow-lg w-[600px]">
                    <h2 className="text-2xl font-semibold mb-4">Add New Project</h2>
                    <p className="text-gray-600 mb-6">Create a new project by filling out the details below.</p>

                    <form onSubmit={handleSubmit}>
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
                                required
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
                                required
                            >
                                <option value="">Select repository</option>
                                {repos.map((repo, index) => (
                                    <option key={index} value={repo}>
                                        {repo}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className="mb-4">
                            <label htmlFor="difficulty" className="block text-lg font-medium mb-2">
                                Difficulty
                            </label>
                            <select
                                id="difficulty"
                                className="w-full p-2 border border-gray-300 rounded-md"
                                value={difficulty}
                                onChange={(e) => setDifficulty(e.target.value)}
                            >
                                <option value="">Select difficulty</option>
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
                                {[
                                    "react", "nextjs", "typescript", "node", "python", "django",
                                    "java", "spring", "html", "css", "mongodb", "graphql"
                                ].map((tech) => (
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
                            <label htmlFor="description" className="block text-lg font-medium mb-2">
                                Description
                            </label>
                            <textarea
                                id="description"
                                className="w-full p-2 border border-gray-300 rounded-md"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                placeholder="Enter project description"
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
    );
}
