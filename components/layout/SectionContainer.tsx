import { cn } from "@/lib/utils";

type MaxWidth = "4xl" | "5xl" | "7xl";

interface SectionContainerProps {
    children: React.ReactNode;
    className?: string;
    maxWidth?: MaxWidth;
}

const maxWidthClasses: Record<MaxWidth, string> = {
    "4xl": "max-w-4xl",
    "5xl": "max-w-5xl",
    "7xl": "max-w-7xl",
};

export function SectionContainer({
    children,
    className,
    maxWidth = "7xl",
}: SectionContainerProps) {
    return (
        <div
            className={cn(
                "mx-auto w-full px-4 sm:px-6 lg:px-8",
                maxWidthClasses[maxWidth],
                className
            )}
        >
            {children}
        </div>
    );
}
