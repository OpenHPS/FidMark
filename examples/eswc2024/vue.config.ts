import { defineConfig } from '@vue/cli-service';

const MonacoWebpackPlugin = require("monaco-editor-webpack-plugin");
const path = require("path");

export default defineConfig({
  publicPath: './',
  configureWebpack: {
    plugins: [
      new MonacoWebpackPlugin({
        languages: [],
        features: ["coreCommands", "find"],
      }),
    ],
    externals: {
      'path': [],
      '@openhps/core': ['OpenHPS', 'core'],
      '@openhps/webxr': ['OpenHPS', 'webxr'],
      '@openhps/rdf': ['OpenHPS', 'rdf'],
      '@openhps/video': ['OpenHPS', 'video'],
      '@openhps/opencv': ['OpenHPS', 'opencv'],
      '@openhps/opencv/web': ['OpenHPS', 'opencv'],
    },
  },
  chainWebpack: (config) => {
    config.resolve.alias.set(
      "vscode",
      path.resolve(
        "./node_modules/monaco-languageclient/lib/vscode-compatibility"
      )
    );
  },
  devServer: {
    open: process.platform === 'darwin',
    host: '0.0.0.0',
    port: 8085,
    https: true,
  },
});
