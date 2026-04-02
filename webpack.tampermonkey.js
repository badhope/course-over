const path = require('path');
const common = require("./webpack.config.js");

module.exports = {
    entry: {
        cxmooc: path.resolve(__dirname, 'src/tampermonkey/cxmooc-pack.ts'),
        zhihuishu: path.resolve(__dirname, 'src/tampermonkey/zhihuishu-pack.ts'),
        course163: path.resolve(__dirname, 'src/tampermonkey/course163-pack.ts'),
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'tampermonkey-[name].js'
    },
    module: common.module,
    resolve: common.resolve,
    optimization: {
        minimize: false
    },
    performance: {
        hints: false
    },
    plugins: []
};
