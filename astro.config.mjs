// @ts-check
import { defineConfig } from 'astro/config';

// 纯静态输出到 dist/，部署到自己的服务器（如 Nginx）根目录即可。
// 如果以后要放在子路径下（例如 https://example.com/sanguo/），在这里加 base: '/sanguo'。
export default defineConfig({
  trailingSlash: 'ignore',
});
