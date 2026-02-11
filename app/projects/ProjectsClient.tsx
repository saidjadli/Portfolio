"use client";

import { ProjectList } from "@/components/projects/ProjectList";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useTranslation } from "@/components/i18n/LanguageProvider";
import { Project } from "@/lib/types";

interface ProjectsClientProps {
    initialProjects: Project[];
}

export function ProjectsClient({ initialProjects }: ProjectsClientProps) {
    const { t } = useTranslation();

    return (
        <div className="container px-4 md:px-6 py-20">
            <SectionHeading
                title={t("projects.title")}
                subtitle={t("projects.subtitle")}
            />
            <ProjectList initialProjects={initialProjects} />
        </div>
    );
}
