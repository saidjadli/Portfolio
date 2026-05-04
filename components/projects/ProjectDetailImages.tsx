"use client";

import Image from "next/image";
import { useState } from "react";

interface ProjectDetailImagesProps {
    title: string;
    heroImage?: string;
    gallery?: string[];
}

function SafeImage({
    src,
    alt,
    className,
    priority = false,
    sizes,
}: {
    src: string;
    alt: string;
    className: string;
    priority?: boolean;
    sizes: string;
}) {
    const [hasError, setHasError] = useState(false);

    if (hasError) {
        return null;
    }

    return (
        <div className={className}>
            <Image
                src={src}
                alt={alt}
                fill
                priority={priority}
                sizes={sizes}
                className="object-cover"
                onError={() => setHasError(true)}
            />
        </div>
    );
}

export function ProjectHeroImage({ title, heroImage }: ProjectDetailImagesProps) {
    if (!heroImage) {
        return null;
    }

    return (
        <SafeImage
            src={heroImage}
            alt={`${title} dashboard preview`}
            priority
            sizes="(min-width: 768px) 896px, 100vw"
            className="relative aspect-video overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-[0_0_40px_-20px_rgba(34,197,94,0.35)]"
        />
    );
}

export function ProjectGallery({ title, gallery }: ProjectDetailImagesProps) {
    if (!gallery?.length) {
        return null;
    }

    return (
        <section>
            <h2 className="text-2xl font-bold mb-4 text-white">Project Gallery</h2>
            <div className="grid md:grid-cols-2 gap-4">
                {gallery.map((image, index) => (
                    <SafeImage
                        key={image}
                        src={image}
                        alt={`${title} gallery image ${index + 1}`}
                        sizes="(min-width: 768px) 448px, 100vw"
                        className="relative aspect-video overflow-hidden rounded-xl border border-white/10 bg-white/5"
                    />
                ))}
            </div>
        </section>
    );
}
