const path=require('path');
const HTMLWebpackPlugin=require('html-webpack-plugin');/* присоединение скриптов в штмл  файл */
const TerserPlugin=require('terser-webpack-plugin'); /* минимификатор */

require('dotenv').config({path: __dirname + '/project.env'}); /* для использования переменных окружения с указанием файла */

const {assembly}=process.env; /* определение переменных окружения */

/**************************************************************************************************/
/**************************************************************************************************/

module.exports={
    mode: assembly,


    context: path.resolve(__dirname, 'source-files'),
    entry: {
        mainscript:'./perspectivo-interface.js',
        secondscript:'./perspectivo-interface2.js',
        scriptforerror:'./ левый путь для генерации ошибки... .js'
    },
    output: {
        path: path.resolve(__dirname, `destination/for-${assembly}`),
        filename: '[name].js',
        library: '[name]',
    },
    watch: false,

    watchOptions: {
        aggregateTimeout: 100
    },
    devtool: 'source-map',
    plugins: [
            new HTMLWebpackPlugin({
                template: path.resolve(__dirname, "source-files", "index.html")
            })
        ],
    devServer: {
        host: 'localhost',
        port: 5000,
        static: __dirname+'/source-files'
    },
    optimization: {
        emitOnErrors: false,
        minimize: assembly=='production',
        minimizer: [new TerserPlugin()]
    }
};
