# BlackWhite 主题配置说明

## 快速配置

### 1. 修改站点信息

编辑 `astro.config.mjs`：

```javascript
site: 'https://your-domain.com',
```

### 2. 自定义导航菜单

编辑 `src/components/NextHeader.astro` 中的 `menuItems` 数组。

### 3. 修改主题颜色

编辑 `src/layouts/NextLayout.astro` 和 CSS 文件。

### 4. 配置文章

在 `src/content/posts/` 目录下创建 `.md` 文件。

## 支持的功能

- ✅ 响应式设计
- ✅ 移动端导航
- ✅ 前端搜索
- ✅ 分类和标签
- ✅ 自定义标签颜色
- ✅ 容器引用
- ✅ 拖动功能

## 依赖项

```json
{
  "astro": "^4.16.0",
  "@astrojs/mdx": "^3.1.0"
}
```
