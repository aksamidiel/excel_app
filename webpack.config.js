const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')


module.exports = {
    context: path.resolve(__dirname, 'source'),  //смотрит за исходниками в папке source
    mode: 'development',
    entry: './index.js',
    output: {
        filename: 'bundle.[hash].js',  //место всех будующих скриптов
        path: path.resolve(__dirname, 'dist')  //прописывает путь где это находится
    },
    plugins:[
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: 'index.html'
        })

    ]
}