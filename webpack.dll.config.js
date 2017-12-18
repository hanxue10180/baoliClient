const path = require('path');
const webpack = require('webpack');
const base = require('./path.js');
module.exports = {
    entry: {
        vendor: ['vuex',  'vue','iview']
    },
    output: {
        path: path.resolve(base.path),
        filename: '[name].dll.js',
        library: '[name]_library'
    },
    plugins: [
        new webpack.DllPlugin({
            path: path.resolve(base.path, '[name]-manifest.json'),
            name: '[name]_library'
        })
    ]
};