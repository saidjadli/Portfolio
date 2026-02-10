import { getProjects } from "@/lib/data";
import { ProjectList } from "@/components/projects/ProjectList";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata = {
    title: "Projects | Alex Chen",
    description: "A showcase of my Data Science and Machine Learning projects.",
};

export default async function ProjectsPage() {
    const projects = await getProjects();

    return (
        <div className="container px-4 md:px-6 py-20">
            <SectionHeading
                title="Projects"
                subtitle="Explore my work in Computer Vision, NLP, and Data Engineering."
            />
            <ProjectList initialProjects={projects} />
        </div>
    );
}
