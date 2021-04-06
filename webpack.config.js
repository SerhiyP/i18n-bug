const path = require('path');
const MergeIntoSingleFilePlugin = require('webpack-merge-and-include-globally');


const outputPath = 'build/';

module.exports = (env, argv) => {
    return {
        entry: './index.js',
        output: {
            path: path.resolve(outputPath),
            filename: '[name].js',
        },
        plugins: [
            new MergeIntoSingleFilePlugin({
                files: {
                    "app.js": [
                        './jquery-1.12.4.js',
                        './jquery.validate.js'
                    ],
                }
            }),
        ]
    };
};
