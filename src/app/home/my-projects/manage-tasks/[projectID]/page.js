"use client"

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { ManagementBoard } from "@/components/management-board/management-board";
import Loading from "@/components/loading";

export default function ProjectPage() {
    const [token, setToken] = useState(undefined);
    const [projectId, setProjectId] = useState(null);
    const {projectID} = useParams();



    useEffect(() => {
        const storageToken = localStorage.getItem("token");
        if (storageToken) {
            setToken(storageToken);
        }
        if (projectID) {
            setProjectId(projectID);
        }
    }, []);


    if (!projectId) {
        return <Loading />;
    }

    if (token) {
        return (<ManagementBoard projectId={projectId} token={token} />);
    } else {
        return (
            <Loading />
        );
    }
}
