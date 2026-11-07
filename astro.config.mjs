// @ts-check
import { defineConfig } from 'astro/config';

// 部署到 GitHub Pages：https://yyf-yin.github.io/sanguo/
export default defineConfig({
  site: 'https://yyf-yin.github.io',
  base: '/sanguo',
  trailingSlash: 'ignore',
});
