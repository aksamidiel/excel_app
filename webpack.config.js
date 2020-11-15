const path = require('path')


module.exports = {
    context: path.resolve(__dirname, 'source'),  //смотрит за исходниками в папке source
    mode: 'development',
    entry: './index.js',
    output: {
        filename: 'bundle.js',  //место всех будующих скриптов
        path: path.resolve(__dirname, 'dist')  //прописывает путь где это находится
    }
}