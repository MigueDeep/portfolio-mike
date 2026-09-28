import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const experienceSchema = z.object({
	company: z.string(),
	role: z.string(),
	location: z.string(),
	period: z.string(),
	bullets: z.array(z.string()),
});

const technologyGroupSchema = z.object({
	name: z.string(),
	items: z.array(z.string()),
});

const profile = defineCollection({
	loader: glob({ pattern: '**/*.json', base: './src/content/profile' }),
	schema: z.object({
		locale: z.enum(['es', 'en']),
		name: z.string(),
		roles: z.array(z.string()),
		email: z.email(),
		location: z.string(),
		bio: z.string(),
		technologies: z.array(technologyGroupSchema),
		experience: z.array(experienceSchema),
		socials: z.array(
			z.object({
				label: z.string(),
				href: z.url(),
			}),
		),
	}),
});

const projects = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
	schema: z.object({
		locale: z.enum(['es', 'en']),
		title: z.string(),
		summary: z.string(),
		description: z.string(),
		stack: z.array(z.string()),
		features: z.array(z.string()),
		repository: z.url().optional(),
		deployment: z.url().optional(),
		image: z.string().optional(),
	}),
});

export const collections = { profile, projects };
