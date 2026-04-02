# cxmooc-tools v2.4.0 部署指南

## ✅ 验证结果

所有检查已通过，扩展已准备就绪！

### 构建验证
- ✓ 所有必需文件已生成
- ✓ Manifest 配置正确
- ✓ 单元测试全部通过 (9/9)
- ✓ TypeScript 编译无错误
- ✓ Webpack 打包成功

### 文件清单
```
build/cxmooc-tools/
├── manifest.json          (扩展配置)
├── img/
│   ├── logo.png          (扩展图标)
│   ├── error.svg
│   ├── success.svg
│   └── navtu.webp
└── src/
    ├── background.js     (后台脚本 - 13.02 KB)
    ├── start.js          (内容脚本 - 10.83 KB)
    ├── mooc.js           (核心功能 - 70.09 KB)
    ├── popup.js          (弹窗脚本 - 6.58 KB)
    └── popup.html        (弹窗页面)
```

## 🚀 部署方式

### 方式一：本地加载（推荐用于测试）

#### Edge 浏览器
1. 打开 Edge 浏览器
2. 访问 `edge://extensions/`
3. 开启右上角的"开发人员模式"
4. 点击"加载解压缩的扩展"
5. 选择 `build/cxmooc-tools` 文件夹
6. 扩展将自动加载并显示在工具栏

#### Chrome 浏览器
1. 打开 Chrome 浏览器
2. 访问 `chrome://extensions/`
3. 开启右上角的"开发者模式"
4. 点击"加载已解压的扩展程序"
5. 选择 `build/cxmooc-tools` 文件夹
6. 扩展将自动加载并显示在工具栏

### 方式二：Edge 扩展商店发布

1. 访问 [Microsoft Edge Add-ons 开发者中心](https://partner.microsoft.com/dashboard/microsoftedge/)
2. 登录 Microsoft 开发者账号
3. 点击"提交新扩展"
4. 上传打包文件 `cxmooc-tools-v2.4.0-edge.zip`
5. 填写扩展详细信息：
   - 名称：超星慕课小工具
   - 版本：2.4.0
   - 描述：一个超星(学习通)/智慧树(知到)/中国大学mooc刷课工具
   - 类别：生产力工具
   - 语言：中文（简体）
6. 提交审核

### 方式三：Chrome 扩展商店发布

1. 访问 [Chrome Web Store 开发者控制台](https://chrome.google.com/webstore/developer/dashboard)
2. 支付一次性开发者费用（$5）
3. 点击"添加新项目"
4. 上传打包文件 `cxmooc-tools-v2.4.0-edge.zip`
5. 填写商店信息并提交审核

## 📋 功能说明

### 支持平台
- ✓ 超星学习通
- ✓ 智慧树知到
- ✓ 中国大学MOOC

### 核心功能
- ✓ 视频自动播放
- ✓ 视频倍速控制
- ✓ 题库搜索
- ✓ 自动答题
- ✓ 验证码自动打码
- ✓ 作业考试辅助

## 🔧 技术栈

- **TypeScript** 5.3.3
- **Webpack** 5.90.0
- **Jest** 29.7.0
- **Chrome Extension Manifest V2**

## 📝 更新日志

### v2.4.0 (2026-04-01)
- ✓ 升级 webpack 4 → 5
- ✓ 升级 TypeScript 3 → 5
- ✓ 升级 Jest 25 → 29
- ✓ 修复所有 TypeScript 类型错误
- ✓ 修复 Promise resolve() 类型问题
- ✓ 修复 Timer 类型定义
- ✓ 优化构建配置
- ✓ 提升代码质量和安全性

## ⚠️ 注意事项

1. **合法使用**：此扩展仅供学习研究使用，请遵守各平台的使用规则
2. **账号安全**：使用前请确保已登录对应平台账号
3. **调试信息**：如遇到问题，请检查浏览器控制台（F12）的错误信息
4. **测试环境**：建议先在测试环境下验证功能正常后再正式使用
5. **版本兼容**：当前使用 Manifest V2，未来可能需要升级到 V3

## 🛠️ 开发命令

```bash
# 安装依赖
npm install

# 开发模式构建
npm run dev

# 生产模式构建
npm run build

# 运行测试
npm test

# 打包扩展
npm run pack

# 生成油猴脚本
npm run tampermonkey
```

## 📞 支持

- **项目地址**：https://github.com/CodFrm/cxmooc-tools
- **问题反馈**：https://github.com/CodFrm/cxmooc-tools/issues
- **官方网站**：https://cx.icodef.com

## 📄 许可证

MIT License

---

**构建时间**: 2026-04-01
**验证状态**: ✓ 所有检查通过
**部署状态**: ✓ 已准备就绪
