#!/usr/bin/env bash
# 用法：
#   ./start.sh           开发模式（改动自动刷新）  http://localhost:4321/
#   ./start.sh preview   构建后预览正式版本        http://localhost:4321/
#   ./start.sh build     只构建，产物在 dist/
set -euo pipefail
cd "$(dirname "$0")"

if ! command -v node >/dev/null 2>&1; then
  echo "[错误] 没有找到 Node.js，请先安装 Node.js 22 或更高版本：https://nodejs.org/" >&2
  exit 1
fi

[ -d node_modules ] || { echo "首次运行，正在安装依赖..."; npm install; }

case "${1:-dev}" in
  dev)     npm run dev -- --host ;;
  preview) npm run build && npm run preview -- --host ;;
  build)   npm run build && echo "构建完成，产物在 dist/ 目录。" ;;
  *)       echo "未知参数：$1（可选 dev / preview / build）" >&2; exit 1 ;;
esac
