import { SkillCategory } from "@/lib/types";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { SectionHeading } from "@/components/ui/SectionHeading";

interface SkillsGridProps {
    skills: SkillCategory[];
}

export function SkillsGrid({ skills }: SkillsGridProps) {
    return (
        <section className="py-20 bg-white/5" id="skills">
            <div className="container px-4 md:px-6">
                <SectionHeading title="Technical Skills" subtitle="Tools and technologies I work with." align="left" />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {skills.map((category) => (
                        <Card key={category.category} className="bg-transparent border-white/10">
                            <h3 className="text-lg font-bold mb-4 text-primary">
                                {category.category}
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {category.items.map((skill) => (
                                    <Badge key={skill} className="bg-secondary/50 text-gray-200 border-white/5">
                                        {skill}
                                    </Badge>
                                ))}
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
