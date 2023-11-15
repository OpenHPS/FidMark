import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import MonacoWebpackPlugin from "monaco-editor-webpack-plugin";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  configureWebpack: {
    plugins: [
      new MonacoWebpackPlugin({
        languages: ["python"],//configure your languages here
        features: ["coreCommands", "find"],
      }), // Place it here
    ],
  },
  chainWebpack: (config) => {
    config.resolve.alias.set(
      "vscode",
      path.resolve(
        "./node_modules/monaco-languageclient/lib/vscode-compatibility"
      )
    );
  }
})
