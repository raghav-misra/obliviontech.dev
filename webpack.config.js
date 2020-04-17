module.exports = {
    entry: './src/app.ts',
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
        path: __dirname + "/dist"
    }
};