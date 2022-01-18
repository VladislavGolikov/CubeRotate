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
        mainscript:'./perspectivo-interface.js'
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

    experiments: {
        asset: true
    },

    module: {
        rules: [
            {test: /\.(pug)$/, loader: 'pug-loader'},
            {test: /\.(?:ico|gif|png|jpg|jpeg)$/i, type: 'asset/resource'},
            {test: /\.(woff(2)?|eot|ttf|otf|svg|)$/, type: 'asset/inline'},
            {test: /\.(css)$/, use: ['style-loader', 'css-loader']}
        ]
    },

    plugins: [
            new HTMLWebpackPlugin({
                template: path.resolve(__dirname, "source-files", "index.pug")
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
