const path = require('path');
const ExactTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: './js/main.js',

    output: {
        // 将所有的模块合并并输出到一个叫bundle.js文件内
        filename: 'bundle.js',
        // 将输出的文件都放在dist目录下
        path: path.resolve(__dirname, './dist')
    },

    module: {
        rules: [
            {
                // 用正则匹配以.css结尾的文件，然后需要使用loader进行转换
                test: /\.css$/,
                loaders: ExactTextPlugin.extract({
                    use: ['css-loader']
                })
            }
        ]
    },
    plugins: [
        new ExactTextPlugin({
            // 从css文件中提取.css文件的名称
            filename: `main.css`
        })
    ]
}