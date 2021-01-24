var HtmlWebpackPlugin = require ("html-webpack-plugin");
const path = require ("path");

module.exports = {
    //devtool: "none", //changed since webpack 5, past the code as the original *decreases performance if you don't read this file better delete this line
    entry: {
        main: "./src/index.js",
        vendor: "./src/vendor.js" //Second entrypoint for tirdparty code Javascript 
    },
    //How to use SCSS
    module: {
        rules:[
           /* {
                test: /\.scss$/, //file extension
                use: ["style-loader", "css-loader", "sass-loader"] //loaders to use
                //[Inyects style into DOM,   Turns CSS in to Javascript,   Transpile SASS in to CSS]
                //last executes first [3th,2nd,1st...]       
            },*/
            {
                test: /\.html$/,
                use: ["html-loader"] //Scann the html files as a text files
            },
            {
                test: /\.(svg|png|jpg|gif)$/,
                use: {
                    loader: "file-loader",
                    options: {
                        publicPath: "./", //To avoud path errors? 
                        name: "[name].[hash].[ext]",// To rename in every load
                        //outputPath: "imgs" //Creates a folder imgs in dist only in build         
                    }
                } //When returns the releative path of the file
            }
        ]
    },

};