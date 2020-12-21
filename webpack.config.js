const webpack = require('webpack');
const CopyPlugin = require('copy-webpack-plugin');

const path = require('path');

const outputPath = 'build/server/';

module.exports = (env, argv) => {
    const isProd = argv.mode === 'production';

    return {
        entry: './server/node.js',
        target: 'node',
        output: {
            path: path.resolve(outputPath),
            filename: '[name].js',
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    use: 'babel-loader',
                },
            ],
        },
        externals: [{
            express: { commonjs: 'express' },
        }],
        plugins: [
            new webpack.DefinePlugin({
                __SERVER__: JSON.stringify(true),
                __DEV__: JSON.stringify(!isProd),
                __TEST__: JSON.stringify(false),
            }),
        ],
    };
};
