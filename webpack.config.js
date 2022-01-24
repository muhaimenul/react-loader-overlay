const path = require('path');
const pkg = require('./package.json');
module.exports = {
    entry: path.resolve(__dirname, 'src') + "/lib/index.js",
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: "index.js",
      library: pkg.name,
      libraryTarget: "commonjs2"
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env", "@babel/preset-react"],
            }
          }
        },
        {
          test: /\.css$/i,
          use: ["style-loader", "css-loader"]
        },
        {
          test: /\.(png|jpg|gif)$/i,
          use: {
            loader: 'url-loader',
            options: {
              limit: 8192
            }
          }
        }
      ]
    }
};