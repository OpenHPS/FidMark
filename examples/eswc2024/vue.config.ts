import { defineConfig } from '@vue/cli-service';

const MonacoWebpackPlugin = require("monaco-editor-webpack-plugin");
const path = require("path");

export default defineConfig({
  publicPath: '/FidMark/application/',
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
      '@openhps/webrtc': ['OpenHPS', 'webrtc'],
      '@openhps/rdf': ['OpenHPS', 'rdf'],
      '@openhps/video': ['OpenHPS', 'video'],
    },
  },
  chainWebpack: (config) => {
    config.optimization
      .minimizer('terser')
      .tap(args => {
        const { terserOptions } = args[0]
        terserOptions.keep_classnames = true
        terserOptions.keep_fnames = true
        return args
      });
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
