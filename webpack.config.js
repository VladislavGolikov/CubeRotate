const path=require('path');

module.exports={
    mode: 'development',
    entry: './perspectivo-interface.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        library: 'CubeRotate',
    },
    watch: true,
    watchOptions: {
        aggregateTimeout: 100
    },
    devtool: 'source-map',

};