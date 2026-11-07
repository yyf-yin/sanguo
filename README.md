# 三国史话

一个介绍三国历史（184 黄巾起义 — 280 三国归晋）的静态网站，以《三国志》等正史为本，并注明与《三国演义》的差异。

## 技术栈

- [Astro](https://astro.build/) 5：纯静态输出，无需后端
- 内容使用 Markdown（Astro Content Collections），新增人物/事件只需加一个 `.md` 文件
- GitHub Actions 自动部署到 GitHub Pages：<https://yyf-yin.github.io/sanguo/>

## 本地开发

```bash
npm install
npm run dev      # http://localhost:4321/sanguo/
npm run build    # 输出到 dist/
```

## 目录结构

```
src/
  content/
    people/      人物，一人一个 .md（文件名即网址，如 cao-cao → /people/cao-cao）
    events/      战役与大事
  content.config.ts  内容字段定义（schema）
  data/factions.ts   势力（魏蜀吴等）信息与配色
  pages/         页面：首页、时间线、人物、战役与大事、势力、史料说明
  components/    卡片、标签等组件
  styles/        全局样式（支持深色模式）
```

## 添加内容

**新增人物**：在 `src/content/people/` 新建 `xxx.md`：

```md
---
name: 鲁肃
courtesy: 子敬
born: 172
died: 217
faction: wu          # han | wei | shu | wu | qun | jin
title: 东吴横江将军
hometown: 临淮东城
summary: 一句话简介
novelNote: 与《演义》的差异（可选）
order: 12            # 列表排序，越小越靠前
---

正文……
```

**新增事件**：在 `src/content/events/` 新建 `xxx.md`，字段见 `src/content.config.ts`，其中 `people` 填人物文件名（如 `[cao-cao, liu-bei]`），会自动在双方页面互相链接。

## 首次部署

仓库 Settings → Pages → Build and deployment → Source 选择 **GitHub Actions**，之后每次合并到 `main` 都会自动发布。
