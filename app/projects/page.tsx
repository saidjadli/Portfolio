import { getProjects } from "@/lib/data";
import { ProjectsClient } from "./ProjectsClient";

export const metadata = {
    title: "Projects | Jadli Said",
    description: "A showcase of my Data Science and Machine Learning projects.",
};

export default async function ProjectsPage() {
    const projects = await getProjects();

    return <ProjectsClient initialProjects={projects} />;
}
