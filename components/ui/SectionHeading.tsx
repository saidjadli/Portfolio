import { cn } from "@/lib/utils";

interface SectionHeadingProps {
    title: string;
    subtitle?: string;
    className?: string;
    align?: "left" | "center";
}

export function SectionHeading({ title, subtitle, className, align = "left" }: SectionHeadingProps) {
    return (
        <div className={cn("mb-8", align === "center" ? "text-center" : "text-left", className)}>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                {title}
            </h2>
            {subtitle && <p className="mt-4 text-lg text-gray-400">{subtitle}</p>}
        </div>
    );
}
