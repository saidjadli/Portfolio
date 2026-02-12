import { HeroV2 } from "@/components/home/HeroV2";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { FeaturedCertificates } from "@/components/home/FeaturedCertificates";
import { ExperiencePreview } from "@/components/home/ExperiencePreview";
import { SkillsGrid } from "@/components/home/SkillsGrid";
import { getProjects, getExperience, getSkills, getCertificates } from "@/lib/data";

import { AboutSection } from "@/components/home/AboutSection";

export default async function Home() {
    const projects = await getProjects();
    const experience = await getExperience();
    const skills = await getSkills();
    const certificates = await getCertificates();

    // Filter featured projects
    const featuredProjects = projects.filter(p => p.featured).slice(0, 3);
    const recentExperience = experience.slice(0, 2);
    const featuredCertificates = certificates.filter(c => c.featured);

    return (
        <div className="flex flex-col gap-10">
            <HeroV2 />
            <AboutSection />
            <FeaturedProjects projects={featuredProjects} />
            <FeaturedCertificates certificates={featuredCertificates} />
            <SkillsGrid skills={skills} />
            <ExperiencePreview experience={recentExperience} />
        </div>
    );
}
