const path = require('path');
module.exports = {
    entry: './ts/app.ts',
    devtool: 'source-map',
    module: {
        rules: [
            {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ],
    },
    output: {
        filename: 'app.js',
        path: __dirname + "/js"
    }
};