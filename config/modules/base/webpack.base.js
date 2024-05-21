const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const DetermineDevToolFromEnvironmentDebugMode = require("../../utils/devtool");
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = (options) => {
  const tsConfigFile = options.tsConfigFile;

  return {
    mode: "production",
    node: {
      __dirname: false
    },
    resolve: {
      extensions: ['.ts', '.js']
    },
    module: {
      rules: [
        {
          test: /\.ts$/,
          loader: 'ts-loader',
          options: {
            configFile: tsConfigFile,
            onlyCompileBundledFiles: true
          }
        }
      ]
    },
    devtool: DetermineDevToolFromEnvironmentDebugMode(),
    output: {
      library: {
        name: '[name].js',
        type: 'umd',
      },
    },
    plugins: [
      new CleanWebpackPlugin(),
      new ESLintPlugin(),
    ]
  }
};
