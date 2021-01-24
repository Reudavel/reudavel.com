const {merge} = require("webpack-merge");
const common = require("./webpack.config.js");
const path = require ("path");
var HtmlWebpackPlugin = require ("html-webpack-plugin");

module.exports = merge(common, { //merge the file common with this content
    mode: "development", //to stop minifing default "production"
    output:{
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist")
    },
    //Plugins: this is to generate an HTML file with the main.[contentHash].js script added
    plugins: [ 
        new HtmlWebpackPlugin(
            {
                template: "./src/template.html" //Use our HTML file to generate HTML index.html by default
            }
        )
    ],

    module: {
        rules:  [
         {
                test: /\.scss$/, //file extension
                use: ["style-loader", "css-loader", "sass-loader"] //loaders to use
                //[Inyects style into DOM,   Turns CSS in to Javascript,   Transpile SASS in to CSS]
                //last executes first [3th,2nd,1st...]       
            }
        ]
    }
});