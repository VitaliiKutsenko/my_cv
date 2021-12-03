const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const copyWebpackPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const { UnusedFilesWebpackPlugin } = require("unused-files-webpack-plugin");
module.exports = {
    context: path.resolve(__dirname, "src"),
    entry: {
        main: "./app.js",
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "Caching",
            template: path.resolve(__dirname, "./index.html"),
        }),
        new CleanWebpackPlugin(),
        new copyWebpackPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, "src/icon/favicon.ico"),
                    to: path.resolve(__dirname, "dist"),
                },
            ],
        }),
        // new UnusedFilesWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: "bundle.[hash].css",
        }),
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
            {
                test: /\.(png|svg|ico|jpeg)$/i,
                use: ["file-loader"],
            },
        ],
    },
    output: {
        filename: "[name].[contenthash].js",
        path: path.resolve(__dirname, "dist"),
    },
};
