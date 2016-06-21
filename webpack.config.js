const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');

const NODE_ENV = process.env.NODE_ENV || 'development';

const config = {
    entry: {
        app: [
            './src/app/index.scss',
            'babel-polyfill',
            './src/app/app.js',
        ],
    },
    module: {
        preLoaders: [
            { test: /\.js$/, exclude: [/node_modules/], loader: 'eslint-loader' },
        ],
        loaders: [
            { test: /\.js$/, exclude: [/node_modules/], loader: 'babel' },
            { test: /\.html$/, loader: 'html' },
            { test: /\.scss$/, loader: ExtractTextPlugin.extract('style', 'css!postcss?pack=general!sass') },
            { test: /\.css$/, loader: ExtractTextPlugin.extract('style', 'css') },
            {
                test: /\.(gif|png|jpe?g|svg|webp|woff|woff2|ttf|eot|mp3|mp4|webm)(\?.+)?$/,
                loader: 'file?name=[sha512:hash:base36:7].[ext]',
            },
        ],
    },
    postcss: {
        general: [
            autoprefixer({ browsers: ['last 2 versions'] }),
        ],
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery',
            'window.Tether': 'tether',
        }),
        // Injects bundles in your index.html instead of wiring all manually.
        // It also adds hash to all injected assets so we don't have problems
        // with cache purging during deployment.
        new HtmlWebpackPlugin({
            template: 'src/index.html',
            inject: true,
            hash: true,
        }),
        new ExtractTextPlugin('index.css', { disable: NODE_ENV !== 'production' }),
    ],
};

if (NODE_ENV === 'development') {
    config.output = {
        filename: '[name].bundle.js',
        publicPath: '/',
        path: path.resolve(__dirname, 'src'),
    };
} else if (NODE_ENV === 'production') {
    config.output = {
        filename: '[name].bundle.js',
        publicPath: '',
        path: path.resolve(__dirname, 'dist'),
    };

    config.plugins = config.plugins.concat([
        new webpack.optimize.UglifyJsPlugin({
            mangle: {
                except: ['$super', '$', 'exports', 'require'],
            },
        }),
    ]);
}

module.exports = config;
