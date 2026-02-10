import { promises as fs } from 'fs';
import path from 'path';
import { Project, Experience, SkillCategory, Education, Profile } from './types';

const contentDir = path.join(process.cwd(), 'content');

export async function getProfile(): Promise<Profile> {
    const filePath = path.join(contentDir, 'profile.json');
    const fileContents = await fs.readFile(filePath, 'utf8');
    return JSON.parse(fileContents);
}

export async function getProjects(): Promise<Project[]> {
    const filePath = path.join(contentDir, 'projects.json');
    const fileContents = await fs.readFile(filePath, 'utf8');
    return JSON.parse(fileContents);
}

export async function getExperience(): Promise<Experience[]> {
    const filePath = path.join(contentDir, 'experience.json');
    const fileContents = await fs.readFile(filePath, 'utf8');
    return JSON.parse(fileContents);
}

export async function getSkills(): Promise<SkillCategory[]> {
    const filePath = path.join(contentDir, 'skills.json');
    const fileContents = await fs.readFile(filePath, 'utf8');
    return JSON.parse(fileContents);
}

export async function getEducation(): Promise<Education[]> {
    const filePath = path.join(contentDir, 'education.json');
    const fileContents = await fs.readFile(filePath, 'utf8');
    return JSON.parse(fileContents);
}

export async function getProjectBySlug(slug: string): Promise<Project | undefined> {
    const projects = await getProjects();
    return projects.find((p) => p.slug === slug);
}
