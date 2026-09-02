# Alex Chen · Personal Website + Technical Blog

这是一个可直接部署到 GitHub Pages 的 **个人主页 + Jekyll 技术博客**。

## 部署

### 方式 A：直接使用 GitHub Pages

1. 创建公开仓库：`你的用户名.github.io`
2. 上传整个项目的文件。
3. GitHub → Settings → Pages。
4. Source 选择 `GitHub Actions`。
5. 推送后 GitHub 会自动构建。

### 方式 B：本地预览

需要 Ruby / Bundler：

```bash
bundle install
bundle exec jekyll serve
```

浏览器打开：

```text
http://127.0.0.1:4000
```

## 写文章

在 `_posts/` 新建：

```text
2026-09-01-my-first-post.md
```

文件头：

```yaml
---
title: "我的第一篇文章"
date: 2026-09-01 09:00:00 +0800
categories: [AI]
tags: [LLM]
description: "文章简介"
---
```

正文使用 Markdown。

图片放在：

```text
assets/images/你的文章/
```

正文引用：

```markdown
![图片说明](/assets/images/你的文章/image.png)
```

## 修改个人信息

主要修改：

- `_config.yml`
- `index.html`
- `projects/index.html`
- `_layouts/default.html`

搜索 `Alex Chen`、`alex@example.com`、`yourusername` 并替换。

## 注意

GitHub Pages 的项目仓库如果不是 `用户名.github.io`，需要设置 `baseurl`，并建议通过 GitHub Actions 发布。
