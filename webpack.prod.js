var HtmlWebpackPlugin = require ("html-webpack-plugin");
const {merge} = require("webpack-merge");
const common = require("./webpack.config.js");
const path = require ("path");
const CleanWebPackPlugin = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
//const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin'); not require in webpack 5

module.exports = merge(common, { //merge the file common with this content
    mode: "production", //to stop minifing default "production"
    output:{
        filename: "[name].[contenthash].bundle.js",//[contentHash] to avoid the catching of the file perfect for PWA no for stat sities
        path: path.resolve(__dirname, "dist")
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name].[hash].css"
        }),
        new CleanWebPackPlugin.CleanWebpackPlugin()//To clean the dist folder every time we build
        //Plugins: this is to generate an HTML file with the main.[contentHash].js script added
     ,
            new HtmlWebpackPlugin(
                {
                    template: "./src/template.html" //Use our HTML file to generate HTML index.html by default
                }
            )
    
    
    ],
    module: {
        rules:[
            {
                test: /\.scss$/, //file extension
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"] //loaders to use
                //[Extract in diferent CSS,   Turns CSS in to Javascript,   Transpile SASS in to CSS]
                //last executes first [3th,2nd,1st...]       
            }
        ]
        
    }
});