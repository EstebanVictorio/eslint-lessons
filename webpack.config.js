/* global require */
const path = require("path");
/* eslint-disable */
const webpack = require("webpack");
const HWP = require("html-webpack-plugin");
const ESLINT_FORMATTER_FRIENDLY = require("eslint-formatter-friendly");
const VANILLA = path.join(__dirname, "vanilla");
const SETTINGS = path.join(__dirname, "settings");
const ENUM = path.join(__dirname, "enum");
const config = {
    mode: "development",
    entry: {
        main: VANILLA + "/Main.js"
    },
    plugins: [
        new HWP({
            title: "ESLint Lessons",
            template: "index.ejs",
            inject: "body",
            filename: "../index.html"
        })
    ],
    node: {
        __dirname: true,
        __filename: true
    },
    resolve: {
        alias: {
            Main: VANILLA,
            Settings: SETTINGS,
            Enum: ENUM,
        },
        extensions: [".js"]
    },
    output: {
        publicPath: "/eslint-lessons/dist/"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: "eslint-loader",
                enforce: "pre",
                options: {
                    formatter: ESLINT_FORMATTER_FRIENDLY
                }
            }
            ,
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["babel-preset-env"],
                        plugins: [
                            require("babel-plugin-transform-object-rest-spread"),
                            require("babel-plugin-transform-class-properties"),
                            require("babel-plugin-syntax-dynamic-import"),
                            require("babel-plugin-transform-runtime")
                        ]
                    }
                }
            },

        ]
    }
};

module.exports = config;