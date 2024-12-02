"use client";

import { Explore } from "@/components/explore";
import { useEffect, useState } from "react";
import Loading from "@/components/loading";

export default function ExplorePage() {
    const [projects, setProjects] = useState(undefined);
    const [token, setToken] = useState(undefined);

    const fetchExploreProjects = async (token) => {
        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/user/explore`, {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
            });

            const data = await res.json();

            if (res.ok) {
                // Filter tasks with status === 0
                const filteredProjects = data.map((project) => ({
                    ...project,
                    tasks: project.tasks.filter((task) => task.status === 0),
                }));
                setProjects(filteredProjects);
            } else {
                console.log(res.status);
                console.log(res);
                alert(data.message || "Failed to fetch project details");
            }
        } catch (error) {
            console.error("Error fetching projects:", error);
            alert("An error occurred while fetching the projects");
        }
    };

    useEffect(() => {
        const storageToken = localStorage.getItem("token");

        if (storageToken) {
            setToken(storageToken)
            fetchExploreProjects(storageToken)
                .then(() => console.log("Project details fetched"))
                .catch((err) => {
                    console.error("Error fetching projects:", err);
                });
        }
    }, []);

    console.log(projects)
    if (projects && token) {
        return <Explore token={token} projects={projects} />;
    } else {
        return <Loading />;
    }
}
