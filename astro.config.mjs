import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import remarkDirective from 'remark-directive';
import { customBlockquotes, customInlineLabels } from './remark-custom-blockquotes.js';

import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  integrations: [
    mdx(),
  ],

  markdown: {
    remarkPlugins: [remarkDirective, customBlockquotes, customInlineLabels],
    syntaxHighlight: 'shiki', // 使用更快的语法高亮
    gfm: true, // 支持 GitHub Flavored Markdown
    smartypants: true, // 智能标点符号
  },

  output: 'static',
  site: 'https://blog.xiting3.xyz',

  devToolbar: {
    enabled: false,
  },

  vite: {
    server: {
      port: 4321,
    },
    resolve: {
      alias: {
        '@': './src',
      },
    },
  },

  build: {
    format: 'directory', // 使用目录格式，URL 更清晰
  },

  experimental: {
    clientPrerender: true, // 启用客户端预渲染
  },

  adapter: cloudflare(),
});