import { getExperience, getEducation } from "@/lib/data";
import { ExperienceClient } from "./ExperienceClient";

export const metadata = {
    title: "Experience | Jadli Said",
    description: "My professional experience and education history.",
};

export default async function ExperiencePage() {
    const experience = await getExperience();
    const education = await getEducation();

    return <ExperienceClient experience={experience} education={education} />;
}
