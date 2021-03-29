module.exports = {
    entry: {
        app: "./src/index.js"
    },

    output: {
        path: __dirname + '/public/js/',
        filename: "[name].js"
    },
    devServer: {
        contentBase: __dirname + '/public',
        port: 8080,
        publicPath: __dirname + '/js/'
    },
    devtool: "#inline-source-map",
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            enforce: "pre",
            loader: 'eslint-loader',
            exclude: /node_modules/
        },{
            test: /\.css$/,
            loader: ['style-loader', 'css-loader']
        },{
            test: /\.(js|jsx)$/,
            loader: 'babel-loader',
            exclude: /node_modules/
    
            }
         ]
    }  
}