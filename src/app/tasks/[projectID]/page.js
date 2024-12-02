"use client"

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { ManagementBoard } from "@/components/management-board/management-board";
import Loading from "@/components/loading";

export default function ProjectPage() {
    const [projectDetails, setProjectDetails] = useState(undefined);
    const [token, setToken] = useState(undefined);
    const [projectId, setProjectId] = useState(null);
    const {projectID} = useParams();

    const fetchCurrentProjectTasks = async (projectId, token) => {

        try {
            console.log(projectId)
            const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/user/projects/${projectId}/get/tasks`, {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            })

            const data = await res.json()

            if (res.ok) {
                setProjectDetails(data)
            } else {
                console.log(res.status)
                alert(data.message || 'Failed to fetch project details')
            }
        } catch (error) {
            console.error('Error adding task:', error)
            alert('An error occurred while adding the task')
        }
    }

    useEffect(() => {
        const storageToken = localStorage.getItem("token");
        if (storageToken) {
            setToken(storageToken);
        }

        if (projectID && storageToken ) {
            console.log('running')
            setProjectId(projectID);
            fetchCurrentProjectTasks(projectID, storageToken)
                .then(r => console.log("Project details fetched"))
                .catch((err) => {
                    console.error('Error getting task:', err);
                })
        }
    }, []);


    if (!projectId) {
        return <Loading />;
    }



    if (token) {
        return (<ManagementBoard projectId={projectId} token={token} projectDetails={projectDetails} />);
    } else {
        return (
            <Loading />
        );
    }
}
