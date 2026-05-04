export interface Project {
    slug: string;
    title: string;
    summary: string;
    category: string;
    tags: string[];
    date: string;
    githubUrl?: string;
    demoUrl?: string | null;
    featured: boolean;
    image?: string;
    gallery?: string[];
    coverImage?: string;
    details?: {
        problem: string;
        dataset: string;
        approach: string;
        results: string;
        limitations: string;
    };
}

export interface Experience {
    id: string;
    role: string;
    company: string;
    location: string;
    startDate: string;
    endDate: string;
    current: boolean;
    description: string[];
    tech: string[];
}

export interface SkillCategory {
    category: string;
    items: string[];
}

export interface Education {
    school: string;
    degree: string;
    location: string;
    startDate: string;
    endDate: string;
    description: string;
}

export interface Profile {
    name: string;
    title: string;
    pitch: string;
    socials: {
        github: string;
        linkedin: string;
        email: string;
    };
    resumeUrl: string;
}

export interface Certificate {
    id: string;
    title: string;
    image: string;
    category: "Deep Learning" | "Machine Learning" | "Languages" | "Spoken Languages" | "Tools";
    featured: boolean;
    learned: {
        en: string[];
        fr: string[];
    };
}
