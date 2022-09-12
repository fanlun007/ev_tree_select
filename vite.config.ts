import path from 'path';
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import ElementPlus from "unplugin-element-plus/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(), 
    ElementPlus()
  ],
  build: {
    rollupOptions: {
      // 请确保外部化那些你的库中不需要的依赖
      external: ['vue'],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: 'Vue',
        },
      },
    },
    lib: {
      entry: './src/lib/index.ts',
      name: 'ev-tree-select',
    },
  },
  resolve: {
    // Vite路径别名配置
    alias: {
      '@': path.resolve('./src'),
      '@lib': path.resolve('./src/lib')
    }
  }
});
