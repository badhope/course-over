const fs = require('fs');
const path = require('path');

console.log('🧪 cxmooc-tools 扩展验证测试\n');
console.log('=' .repeat(60));

const buildDir = path.join(__dirname, 'build', 'cxmooc-tools');
const requiredFiles = [
    { path: 'manifest.json', desc: '扩展配置文件' },
    { path: 'src/background.js', desc: '后台脚本' },
    { path: 'src/start.js', desc: '内容脚本' },
    { path: 'src/mooc.js', desc: '核心功能脚本' },
    { path: 'src/popup.js', desc: '弹窗脚本' },
    { path: 'src/popup.html', desc: '弹窗页面' },
    { path: 'img/logo.png', desc: '扩展图标' }
];

let allPassed = true;

console.log('\n📁 文件完整性检查:\n');
requiredFiles.forEach(file => {
    const filePath = path.join(buildDir, file.path);
    const exists = fs.existsSync(filePath);
    const status = exists ? '✓' : '✗';
    const color = exists ? '\x1b[32m' : '\x1b[31m';
    console.log(`${color}${status}\x1b[0m ${file.path.padEnd(25)} - ${file.desc}`);
    if (!exists) allPassed = false;
});

console.log('\n📋 Manifest 配置检查:\n');
try {
    const manifestPath = path.join(buildDir, 'manifest.json');
    const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
    
    const checks = [
        { name: 'Manifest 版本', value: manifest.manifest_version, expected: 2 },
        { name: '扩展名称', value: manifest.name, expected: '超星慕课小工具' },
        { name: '版本号', value: manifest.version, expected: '2.4.0' },
        { name: '权限配置', value: manifest.permissions ? '已配置' : '未配置', expected: '已配置' },
        { name: '内容脚本', value: manifest.content_scripts ? '已配置' : '未配置', expected: '已配置' },
        { name: '后台脚本', value: manifest.background ? '已配置' : '未配置', expected: '已配置' }
    ];
    
    checks.forEach(check => {
        const passed = check.value === check.expected;
        const status = passed ? '✓' : '✗';
        const color = passed ? '\x1b[32m' : '\x1b[31m';
        console.log(`${color}${status}\x1b[0m ${check.name.padEnd(15)}: ${check.value}`);
        if (!passed) allPassed = false;
    });
} catch (error) {
    console.log('\x1b[31m✗ Manifest 解析失败:\x1b[0m', error.message);
    allPassed = false;
}

console.log('\n📊 文件大小统计:\n');
try {
    const files = [
        { path: 'src/background.js', name: '后台脚本' },
        { path: 'src/start.js', name: '内容脚本' },
        { path: 'src/mooc.js', name: '核心脚本' },
        { path: 'src/popup.js', name: '弹窗脚本' }
    ];
    
    files.forEach(file => {
        const filePath = path.join(buildDir, file.path);
        const stats = fs.statSync(filePath);
        const sizeKB = (stats.size / 1024).toFixed(2);
        console.log(`  ${file.name.padEnd(10)}: ${sizeKB.padStart(7)} KB`);
    });
} catch (error) {
    console.log('\x1b[31m✗ 文件大小统计失败:\x1b[0m', error.message);
}

console.log('\n' + '=' .repeat(60));
if (allPassed) {
    console.log('\n\x1b[32m✓ 所有检查通过！扩展已准备就绪，可以进行部署。\x1b[0m\n');
} else {
    console.log('\n\x1b[31m✗ 部分检查未通过，请检查上述错误信息。\x1b[0m\n');
}

console.log('🚀 部署步骤:');
console.log('   1. Edge浏览器: 访问 edge://extensions/');
console.log('   2. 开启"开发人员模式"');
console.log('   3. 点击"加载解压缩的扩展"');
console.log('   4. 选择 build/cxmooc-tools 文件夹');
console.log('   5. 或直接上传 cxmooc-tools-v2.4.0-edge.zip 到 Edge 扩展商店\n');
