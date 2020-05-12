module.exports = {
    entry: './src/app.ts',
    devtool: 'source-map',
    devServer: {
        contentBase: __dirname,
        compress: true,
        port: 6969
    },
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
        path: __dirname + "/dist"
    }
};