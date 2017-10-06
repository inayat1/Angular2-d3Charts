var path = require('path');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var uglifyPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    entry: "./src/main.ts",
    output: {
        path: __dirname + "/dist",
        filename: "bundle.js"
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx']
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                'test':/\.ts$/,
                'use':['awesome-typescript-loader','angular2-template-loader'],
                'exclude': [
                        path.resolve(__dirname, "node_modules")
                    ]
            },
            { 
                test: /\.html$/, 
                use: ['raw-loader']
            },
            {
                test: /\.css$/,
                use: [
                    'to-string-loader', 'css-loader'
                ]
            }
        ]
    },
    plugins:[
        new CleanWebpackPlugin(['dist/*.*'],{dry:false}),
        new uglifyPlugin()
    ]
}