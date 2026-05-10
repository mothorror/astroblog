# BlackWhite 主题

一款简洁优雅的 Astro 静态博客主题，采用黑白配色风格，专注于阅读体验。

## 功能特点

- 🎨 简洁优雅的黑白设计
- 📱 响应式布局，完美支持移动端
- 🔍 内置前端搜索功能
- 🏷️ 支持分类和标签
- 📝 支持 Markdown 扩展语法
- 🌈 自定义标签高亮
- 🎯 可拖动的汉堡菜单

## 快速开始

### 安装依赖

```bash
npm install
```

### 开发服务器

```bash
npm run dev
```

访问 http://localhost:4321 查看效果

### 构建生产版本

```bash
npm run build
```

构建后的文件在 `dist/` 目录中。

## 配置说明

### 站点配置

在 `astro.config.mjs` 中修改站点信息：

```javascript
export default defineConfig({
  site: 'https://your-domain.com',  // 修改为你的域名
  // ... 其他配置
});
```

### 导航菜单

编辑 `src/components/NextHeader.astro` 修改菜单项：

```javascript
const menuItems = [
  { name: '首页', path: '/', icon: 'fa-solid fa-house' },
  { name: '归档', path: '/archive', icon: 'fa-solid fa-box-archive' },
  { name: '分类', path: '/categories', icon: 'fa-solid fa-layer-group' },
  { name: '标签', path: '/tags', icon: 'fa-solid fa-tags' },
  { name: '关于', path: '/about', icon: 'fa-solid fa-circle-info' },
];
```

### 文章配置

在 `src/content/posts/` 目录下创建 Markdown 文件，格式如下：

```markdown
---
title: "文章标题"
pubDate: 2026-05-10T00:00:00.000Z
updatedDate: 2026-05-10T00:00:00.000Z
description: "文章描述"
category: "技术教程"
tags: ["Astro", "前端开发"]
---

# 文章内容

这里是文章正文...
```

## 自定义功能

### 标签高亮

支持以下标签颜色：

```
[!labelorange]@橘色高亮@
[!labelblue]@蓝色高亮@
[!labelgrey]@灰色高亮@
[!labelpink]@粉色高亮@
[!labelyellow]@黄色高亮@
[!labelgreen]@绿色高亮@
```

### 容器引用

支持以下容器类型：

```markdown
:::note
提示内容
:::

:::warning
警告内容
:::

:::danger
危险内容
:::
```

## 部署

### 构建静态站点

```bash
npm run build
```

### 部署到 Cloudflare Pages

1. 将代码推送到 GitHub
2. 在 Cloudflare Pages 中连接仓库
3. 自动构建和部署

### 部署到 Vercel

```bash
vercel --prod
```

## 目录结构

```
blackwhite-theme/
├── src/
│   ├── components/        # 组件
│   ├── layouts/           # 布局模板
│   ├── pages/             # 页面
│   ├── lib/               # 工具函数
│   └── content/          # 内容
│       └── posts/        # 博客文章
├── public/               # 静态资源
│   ├── css/              # 样式文件
│   ├── js/               # JavaScript 文件
│   └── lib/              # 第三方库
├── astro.config.mjs      # Astro 配置
├── package.json          # 依赖配置
└── README.md             # 说明文档
```

## 技术栈

- **框架**: Astro
- **语言**: TypeScript/JavaScript
- **样式**: CSS
- **图标**: Font Awesome

## 开源协议

MIT License

Copyright (c) 2026 Xiting

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
