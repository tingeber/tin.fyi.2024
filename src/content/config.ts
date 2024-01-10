import { defineCollection, z } from "astro:content";

const blog = defineCollection({
	type: "content",
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		description: z.string(),
		// Transform string to Date object
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: z.string().optional(),
	}),
});

const topics = defineCollection({
	type: "data",
	schema: z.object({
		title: z.string(),
		description: z.string().optional(),
	}),
});

const posts = defineCollection({
	type: "content",
	schema: z.object({
		title: z.string(),
		header: z.string(),
		startDate: z.coerce.date(),
		lastUpdated: z.coerce.date().optional(),
		tags: z.string().optional(),
		excerpt: z.string(),
	}),
});

export const collections = { blog, topics, posts };
