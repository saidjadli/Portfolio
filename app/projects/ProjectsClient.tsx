"use client";

import { ProjectList } from "@/components/projects/ProjectList";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useTranslation } from "@/components/i18n/LanguageProvider";
import { Project } from "@/lib/types";
import { SectionContainer } from "@/components/layout/SectionContainer";

interface ProjectsClientProps {
    initialProjects: Project[];
}

export function ProjectsClient({ initialProjects }: ProjectsClientProps) {
    const { t } = useTranslation();

    return (
        <SectionContainer className="py-20">
            <SectionHeading
                title={t("projects.title")}
                subtitle={t("projects.subtitle")}
            />
            <ProjectList initialProjects={initialProjects} />
        </SectionContainer>
    );
}
