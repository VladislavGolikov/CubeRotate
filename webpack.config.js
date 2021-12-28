const path=require('path');
const HTMLWebpackPlugin=require('html-webpack-plugin');
const TerserPlugin=require('terser-webpack-plugin');

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
        scriptforerror:'./template-cube2.js'
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
        minimize: assembly=='production',
        minimizer: [new TerserPlugin()]
    }
};
