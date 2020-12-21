const path = require('path');

const outputPath = 'build/server/';

module.exports = (env, argv) => {
    const isProd = argv.mode === 'production';

    return {
        entry: './server/i18n.js',
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
    };
};
