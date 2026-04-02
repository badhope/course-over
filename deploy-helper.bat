@echo off
chcp 65001 >nul
title cxmooc-tools 部署助手
color 0A

echo.
echo ╔══════════════════════════════════════════════════════════╗
echo ║       cxmooc-tools v2.4.0 部署助手                      ║
echo ╚══════════════════════════════════════════════════════════╝
echo.
echo 📋 部署步骤：
echo.
echo 1. Edge 浏览器已自动打开扩展管理页面
echo 2. 请在浏览器中完成以下操作：
echo.
echo    □ 开启右上角的"开发人员模式"开关
echo    □ 点击"加载解压缩的扩展"按钮
echo    □ 在文件选择器中，粘贴以下路径：
echo.
echo      %CD%\build\cxmooc-tools
echo.
echo    □ 点击"选择文件夹"
echo.
echo 3. 扩展将自动加载，图标会显示在浏览器工具栏
echo.
echo ══════════════════════════════════════════════════════════
echo.
echo 📁 扩展文件夹路径已复制到剪贴板！
echo.

set "folderPath=%CD%\build\cxmooc-tools"
echo %folderPath%| clip

echo ✓ 路径: %folderPath%
echo.
echo ══════════════════════════════════════════════════════════
echo.
echo 🎯 部署后测试：
echo.
echo    1. 访问超星学习通、智慧树或中国大学MOOC
echo    2. 登录账号
echo    3. 进入课程页面
echo    4. 扩展将自动运行
echo.
echo ══════════════════════════════════════════════════════════
echo.
echo ⚠️  注意事项：
echo.
echo    • 此扩展仅供学习研究使用
echo    • 请遵守各平台的使用规则
echo    • 如遇问题，按 F12 查看控制台错误信息
echo.
echo ══════════════════════════════════════════════════════════
echo.
echo 按任意键打开扩展文件夹...
pause >nul

explorer "%folderPath%"

echo.
echo ✓ 部署助手已完成！
echo.
echo 如需上传到 Edge 扩展商店，请使用：
echo %CD%\cxmooc-tools-v2.4.0-edge.zip
echo.
pause
