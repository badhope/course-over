const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const home = __dirname + '/src';
module.exports = {
    entry: {
        mooc: home + '/mooc.ts',
        start: home + '/start.ts',
        background: home + '/background.ts',
        popup: home + '/popup.ts'
    },
    output: {
        path: path.resolve(__dirname, 'build/cxmooc-tools/src'),
        filename: '[name].js',
        clean: false
    },
    plugins: [
        new htmlWebpackPlugin({
            filename: path.resolve(__dirname, 'build/cxmooc-tools/src/popup.html'),
            template: home + '/views/popup.html',
            inject: 'head',
            title: '弹出页面',
            minify: {
                removeComments: true
            },
            chunks: ['popup']
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            }, {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js'],
        alias: {
            "@App": path.resolve(__dirname, 'src/'),
        },
        fallback: {
            "fs": false,
            "path": false,
            "crypto": false
        }
    },
    optimization: {
        minimize: true
    },
    performance: {
        hints: false
    }
};
