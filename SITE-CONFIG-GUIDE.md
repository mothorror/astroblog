# 全局配置文件使用指南

## 概述

`site-config.yaml` 是 BlackWhite 主题的全局配置文件，通过修改该文件可以对整个博客进行全局配置，无需修改代码。

## 配置文件位置

```
/root/my-blog/site-config.yaml
```

## 配置项说明

### 1. 网站基本信息 (site)

```yaml
site:
  title: "Xiting's Blog"              # 网站标题
  description: '网站描述'              # 网站描述，用于SEO
  keywords: '关键词1,关键词2'          # 网站关键词，用于SEO
  author: '作者名'                     # 网站作者
```

### 2. 背景设置 (background)

#### PNG 模式（静态图片背景）

```yaml
background:
  mode: 'png'                         # 设置为 png 模式
  png:
    url: 'https://example.com/bg.png' # 背景图片URL
    opacity: 0.85                     # 透明度 (0-1)
    size: 'cover'                     # 背景尺寸：cover/contain/auto
    position: 'center'                # 背景位置：center/top/bottom/left/right
    attachment: 'fixed'               # 背景附件：fixed/scroll
```

#### MP4 模式（动态视频背景）

```yaml
background:
  mode: 'mp4'                         # 设置为 mp4 模式
  mp4:
    url: 'https://example.com/bg.mp4' # 背景视频URL
    opacity: 0.85                     # 透明度 (0-1)
    autoplay: true                    # 自动播放
    loop: true                        # 循环播放
    muted: true                       # 静音播放
```

### 3. 头部设置 (header)

```yaml
header:
  title: "Xiting's Blog"              # 头部标题
  subtitle: 'Stay Hungry, Stay Foolish' # 副标题
```

### 4. 导航菜单 (navigation)

```yaml
navigation:
  - name: '首页'                      # 菜单项名称
    url: '/'                          # 菜单项链接
  - name: '归档'
    url: '/archive'
  - name: '分类'
    url: '/categories'
  - name: '标签'
    url: '/tags'
  - name: '关于'
    url: '/about'
```

### 5. 页脚设置 (footer)

```yaml
footer:
  copyright: '© 2024 Xiting. All rights reserved.' # 版权信息
  powered_by: 'Astro'                 # 技术支持
```

### 6. 搜索设置 (search)

```yaml
search:
  enabled: true                       # 是否启用搜索功能
  placeholder: '搜索文章...'           # 搜索框占位符
```

### 7. 功能开关 (features)

```yaml
features:
  back_to_top: true                   # 是否启用返回顶部按钮
  pace_loading: true                  # 是否启用加载动画
  code_highlight: true                # 是否启用代码高亮
  lazy_load_images: false             # 是否启用图片懒加载
```

## 完整配置示例

```yaml
site:
  title: "Xiting's Blog"
  description: '黑果小兵,daliansky,blog.daliansky.net,macOS,Hackintosh,黑苹果,linux'
  keywords: 'daliansky,黑果小兵,macOS,Hackintosh,黑苹果,linux,blog.daliansky.net'
  author: 'Xiting'

background:
  mode: 'png'                         # 可选：'png' 或 'mp4'
  png:
    url: 'https://a1.boltp.com/2026/05/06/69fb579073a05.png'
    opacity: 0.85
    size: 'cover'
    position: 'center'
    attachment: 'fixed'
  mp4:
    url: ''                           # 留空则使用png模式
    opacity: 0.85
    autoplay: true
    loop: true
    muted: true

header:
  title: "Xiting's Blog"
  subtitle: 'Stay Hungry, Stay Foolish'

navigation:
  - name: '首页'
    url: '/'
  - name: '归档'
    url: '/archive'
  - name: '分类'
    url: '/categories'
  - name: '标签'
    url: '/tags'
  - name: '关于'
    url: '/about'

footer:
  copyright: '© 2024 Xiting. All rights reserved.'
  powered_by: 'Astro'

search:
  enabled: true
  placeholder: '搜索文章...'

features:
  back_to_top: true
  pace_loading: true
  code_highlight: true
  lazy_load_images: false
```

## 使用方法

1. **编辑配置文件**
   ```bash
   nano /root/my-blog/site-config.yaml
   # 或使用您喜欢的编辑器
   ```

2. **修改配置项**
   - 根据上述说明修改相应的配置项
   - 保存文件

3. **重新构建**
   ```bash
   npm run build
   ```

4. **本地测试（可选）**
   ```bash
   npm run preview
   ```
   然后访问 http://localhost:4321 查看效果

5. **部署到生产环境**
   - 推送到 Git 仓库
   - Cloudflare Pages 会自动构建和部署

## 背景模式切换说明

### 切换到 MP4 动态壁纸

1. 将 `background.mode` 设置为 `'mp4'`
2. 在 `background.mp4.url` 中填入 MP4 文件的 URL
3. 调整其他参数（opacity、autoplay、loop、muted）
4. 重新构建

### 切换到 PNG 静态图片

1. 将 `background.mode` 设置为 `'png'`
2. 在 `background.png.url` 中填入图片的 URL
3. 调整其他参数（opacity、size、position、attachment）
4. 重新构建

## 注意事项

1. **YAML 语法**：注意缩进和语法格式，使用空格而不是 Tab
2. **URL 格式**：确保 URL 使用完整的 HTTPS 地址
3. **透明度**：opacity 的范围是 0-1，0 为完全透明，1 为完全不透明
4. **构建生效**：修改配置后必须重新构建才能生效
5. **视频格式**：MP4 视频建议使用 H.264 编码以确保兼容性

## 常见问题

### Q: 修改配置后没有生效？
A: 确保重新运行了 `npm run build` 并部署了更新的文件。

### Q: MP4 视频不播放？
A: 检查以下几点：
- 确保 URL 可以直接访问
- 检查浏览器是否支持该视频格式
- 确保 autoplay 和 muted 设置为 true（浏览器通常要求静音才能自动播放）

### Q: 如何使用本地文件？
A: 将文件放在 `public` 目录下，然后使用相对路径，例如：
```yaml
png:
  url: '/images/bg.png'
```

## 技术支持

如有问题，请查看 BlackWhite 主题文档或提交 Issue。
