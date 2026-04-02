# cxmooc-tools v2.4.0 部署助手

Write-Host ""
Write-Host "╔══════════════════════════════════════════════════════════╗" -ForegroundColor Green
Write-Host "║       cxmooc-tools v2.4.0 部署助手                      ║" -ForegroundColor Green
Write-Host "╚══════════════════════════════════════════════════════════╝" -ForegroundColor Green
Write-Host ""

Write-Host "📋 部署步骤：" -ForegroundColor Cyan
Write-Host ""
Write-Host "1. Edge 浏览器已自动打开扩展管理页面"
Write-Host "2. 请在浏览器中完成以下操作："
Write-Host ""
Write-Host "   □ 开启右上角的'开发人员模式'开关" -ForegroundColor Yellow
Write-Host "   □ 点击'加载解压缩的扩展'按钮" -ForegroundColor Yellow
Write-Host "   □ 在文件选择器中，粘贴以下路径：" -ForegroundColor Yellow
Write-Host ""

$folderPath = Join-Path $PWD "build\cxmooc-tools"
Write-Host "     $folderPath" -ForegroundColor Green
Write-Host ""
Write-Host "   □ 点击'选择文件夹'" -ForegroundColor Yellow
Write-Host ""
Write-Host "3. 扩展将自动加载，图标会显示在浏览器工具栏"
Write-Host ""

Write-Host "══════════════════════════════════════════════════════════" -ForegroundColor Gray
Write-Host ""

Write-Host "📁 扩展文件夹路径已复制到剪贴板！" -ForegroundColor Green
Set-Clipboard -Value $folderPath
Write-Host ""
Write-Host "✓ 路径: $folderPath" -ForegroundColor Green
Write-Host ""

Write-Host "══════════════════════════════════════════════════════════" -ForegroundColor Gray
Write-Host ""

Write-Host "🎯 部署后测试：" -ForegroundColor Cyan
Write-Host ""
Write-Host "   1. 访问超星学习通、智慧树或中国大学MOOC"
Write-Host "   2. 登录账号"
Write-Host "   3. 进入课程页面"
Write-Host "   4. 扩展将自动运行"
Write-Host ""

Write-Host "══════════════════════════════════════════════════════════" -ForegroundColor Gray
Write-Host ""

Write-Host "⚠️  注意事项：" -ForegroundColor Yellow
Write-Host ""
Write-Host "   • 此扩展仅供学习研究使用"
Write-Host "   • 请遵守各平台的使用规则"
Write-Host "   • 如遇问题，按 F12 查看控制台错误信息"
Write-Host ""

Write-Host "══════════════════════════════════════════════════════════" -ForegroundColor Gray
Write-Host ""

Write-Host "正在打开扩展文件夹..." -ForegroundColor Cyan

# 打开扩展文件夹
Start-Process explorer.exe -ArgumentList $folderPath

Write-Host ""
Write-Host "✓ 部署助手已完成！" -ForegroundColor Green
Write-Host ""
Write-Host "如需上传到 Edge 扩展商店，请使用：" -ForegroundColor Cyan
$zipPath = Join-Path $PWD "cxmooc-tools-v2.4.0-edge.zip"
Write-Host "$zipPath" -ForegroundColor Green
Write-Host ""
