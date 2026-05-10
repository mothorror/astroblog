import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// 博客文章内容验证
const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string().min(1, '标题不能为空').max(100, '标题不能超过100字符'),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    description: z.string().min(1, '描述不能为空').max(200, '描述不能超过200字符'),
    category: z.string().max(50, '分类不能超过50字符').optional(),
    tags: z.array(z.string().max(30, '标签不能超过30字符')).max(10, '最多10个标签').optional(),
    backgroundImage: z.string().url('背景图片必须是有效的URL').optional(),
    draft: z.boolean().default(false).optional(),
  }),
});

// 增强的文章内容验证（兼容旧的posts目录）
const posts = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/posts' }),
  schema: z.object({
    title: z.string().min(1, '标题不能为空').max(100, '标题不能超过100字符'),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    description: z.string().min(1, '描述不能为空').max(200, '描述不能超过200字符'),
    category: z.string().max(50, '分类不能超过50字符').optional(),
    tags: z.array(z.string().max(30, '标签不能超过30字符')).max(10, '最多10个标签').optional(),
    backgroundImage: z.string().url('背景图片必须是有效的URL').optional(),
    status: z.enum(['published', 'draft']).default('published').optional(),
  }),
});

// 资源下载内容验证
const resources = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/resources' }),
  schema: z.object({
    name: z.string().min(1, '资源名称不能为空').max(100, '资源名称不能超过100字符'),
    version: z.string().max(20, '版本号不能超过20字符').optional(),
    description: z.string().min(1, '描述不能为空').max(200, '描述不能超过200字符'),
    downloadUrl: z.string().url('下载链接必须是有效的URL'),
    publishDate: z.coerce.date(),
  }),
});

export const collections = {
  blog,
  posts,
  resources,
};
