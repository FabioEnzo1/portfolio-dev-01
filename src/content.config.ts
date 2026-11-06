import { glob } from "astro/loaders";
import { z } from "astro/zod";
import { defineCollection } from "astro:content";

// Cada arquivo .md em src/content/projects/ vira um projeto no site.
const projects = defineCollection({
  loader: glob({
    pattern: ["**/*.md", "!READMEFSW.md", "!readmeProjeto3.md"],
    base: "./src/content/projects",
  }),
  schema: z.object({
    titulo: z.string(),
    categoria: z.string(),
    descricao: z.string(),
    tags: z.array(z.string()).default([]),
    ordem: z.number().default(99),
    imagem: z.string().optional(),
    demo: z.string().url().optional(),
    repo: z.string().url().optional(),
  }),
});

export const collections = { projects };
