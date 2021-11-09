const path=require('path');

//const NODE_ENV=process.env;
//console.log(NODE_ENV)
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