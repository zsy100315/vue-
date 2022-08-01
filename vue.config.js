// const { defineConfig } = require('@vue/cli-service');
const path = require('path');
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');
module.exports = {
  publicPath: '/',
  lintOnSave: false,
  configureWebpack: {
    resolve: {
      extensions: ['.js', '.ts', '.vue', '.d.ts'],
      alias: {
        '@': path.resolve(__dirname, 'src'),
        api: path.resolve(__dirname, 'src/api'),
        assets: path.resolve(__dirname, 'src/assets'),
        comp: path.resolve(__dirname, 'src/components'),
        types: path.resolve(__dirname, 'src/types'),
        utils: path.resolve(__dirname, 'src/utils'),
        views: path.resolve(__dirname, 'src/views')
      }
    },
    plugins: [new NodePolyfillPlugin()]
  },
  devServer: {
    host: '127.0.0.1',
    port: 3000,
    open: true,
    hot: true
    // proxy: {
    // 	'/api': {
    // 		target: '127.0.0.1:7051',
    // 		pathRewrite: {'^/api': ''}
    // 	}
    // }
  }
};
