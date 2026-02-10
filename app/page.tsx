import { Hero } from "@/components/home/Hero";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { ExperiencePreview } from "@/components/home/ExperiencePreview";
import { SkillsGrid } from "@/components/home/SkillsGrid";
import { getProjects, getExperience, getSkills } from "@/lib/data";

export default async function Home() {
    const projects = await getProjects();
    const experience = await getExperience();
    const skills = await getSkills();

    // Filter featured projects
    const featuredProjects = projects.filter(p => p.featured).slice(0, 3);
    const recentExperience = experience.slice(0, 2);

    return (
        <div className="flex flex-col gap-10">
            <Hero />
            <FeaturedProjects projects={featuredProjects} />
            <SkillsGrid skills={skills} />
            <ExperiencePreview experience={recentExperience} />
        </div>
    );
}
