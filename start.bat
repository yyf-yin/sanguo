@echo off
chcp 65001 >nul
setlocal
cd /d "%~dp0"

REM 用法：
REM   start.bat           开发模式（改动自动刷新）  http://localhost:4321/
REM   start.bat preview   构建后预览正式版本        http://localhost:4321/
REM   start.bat build     只构建，产物在 dist\

where node >nul 2>nul
if errorlevel 1 (
  echo [错误] 没有找到 Node.js，请先安装 Node.js 22 或更高版本：https://nodejs.org/
  pause
  exit /b 1
)

if not exist node_modules (
  echo 首次运行，正在安装依赖...
  call npm install || goto :fail
)

set MODE=%1
if "%MODE%"=="" set MODE=dev

if /i "%MODE%"=="dev" (
  echo 启动开发服务器：http://localhost:4321/
  call npm run dev -- --open || goto :fail
) else if /i "%MODE%"=="preview" (
  call npm run build || goto :fail
  echo 启动预览服务器：http://localhost:4321/
  call npm run preview -- --open || goto :fail
) else if /i "%MODE%"=="build" (
  call npm run build || goto :fail
  echo 构建完成，产物在 dist\ 目录。
) else (
  echo 未知参数：%MODE%（可选 dev / preview / build）
  exit /b 1
)
exit /b 0

:fail
echo [错误] 执行失败，请查看上面的输出。
pause
exit /b 1
