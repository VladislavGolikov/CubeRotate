const path=require('path');

require('dotenv').config({path: __dirname + '/project.env'}); /* для использования переменных окружения с указанием файла */

const {assembly}=process.env; /* определение переменных окружения */
console.log(assembly)

module.exports={
    mode: 'development',


    context: path.resolve(__dirname, 'source-files'),
    entry: './perspectivo-interface.js',
    output: {
        path: true ? path.resolve(__dirname, `destination/for-development`) : path.resolve(__dirname, 'destination/for-production'),
        filename: 'bundle.js',
        library: 'CubeRotate',
    },
    watch: false,

    watchOptions: {
        aggregateTimeout: 100
    },
    devtool: 'source-map',

};
