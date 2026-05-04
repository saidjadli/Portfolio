"use client";

import Image from "next/image";
import { useState } from "react";
import { ZoomIn } from "lucide-react";
import { ImageLightbox } from "@/components/ui/ImageLightbox";

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
    onClick,
}: {
    src: string;
    alt: string;
    className: string;
    priority?: boolean;
    sizes: string;
    onClick?: () => void;
}) {
    const [hasError, setHasError] = useState(false);

    if (hasError) {
        return null;
    }

    return (
        <button
            type="button"
            className={`${className} group cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary/50`}
            onClick={onClick}
            aria-label={`Open ${alt}`}
        >
            <Image
                src={src}
                alt={alt}
                fill
                priority={priority}
                sizes={sizes}
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                onError={() => setHasError(true)}
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/35 transition-colors duration-300 flex items-center justify-center">
                <ZoomIn className="w-10 h-10 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
        </button>
    );
}

export function ProjectHeroImage({ title, heroImage }: ProjectDetailImagesProps) {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    if (!heroImage) {
        return null;
    }

    return (
        <>
            <SafeImage
                src={heroImage}
                alt={`${title} dashboard preview`}
                priority
                sizes="(min-width: 768px) 896px, 100vw"
                className="relative aspect-video w-full overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-[0_0_40px_-20px_rgba(34,197,94,0.35)]"
                onClick={() => setSelectedImage(heroImage)}
            />
            <ImageLightbox
                src={selectedImage}
                alt={`${title} preview`}
                onClose={() => setSelectedImage(null)}
            />
        </>
    );
}

export function ProjectGallery({ title, gallery }: ProjectDetailImagesProps) {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

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
                        className="relative aspect-video w-full overflow-hidden rounded-xl border border-white/10 bg-white/5"
                        onClick={() => setSelectedImage(image)}
                    />
                ))}
            </div>
            <ImageLightbox
                src={selectedImage}
                alt={`${title} gallery preview`}
                onClose={() => setSelectedImage(null)}
            />
        </section>
    );
}
