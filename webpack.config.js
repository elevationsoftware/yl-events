const path = require('path');

module.exports = {
    mode: "development",
    entry: path.resolve(__dirname,'src','app'),
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    resolve: {
        extensions: ['.js','.jsx']
    },
    devServer: {
        historyApiFallback: true
    },
    module: {
        rules: [{
            test: /.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/,
            use: "url-loader?limit=100000"
        },
        {
            test: /\.(scss)$/,
            use: [{
                    // Adds CSS to the DOM by injecting a `<style>` tag
                    loader: 'style-loader'
                },
                {
                    // Interprets `@import` and `url()` like `import/require()` and will resolve them
                    loader: 'css-loader'
                },
                {
                    // Loader for webpack to process CSS with PostCSS
                    loader: 'postcss-loader',
                    options: {
                        plugins: function () {
                        return [
                            require('autoprefixer')
                        ];
                        }
                    }
                },
                {
                    // Loads a SASS/SCSS file and compiles it to CSS
                    loader: 'sass-loader'
                }
            ]
        },
        {
            test: /\.jsx?/,
            loader: 'babel-loader',
        }]
    },
};