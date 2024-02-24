import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { TDesignResolver } from 'unplugin-vue-components/resolvers';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  plugins: [
    vue(),
    AutoImport({
      resolvers: [TDesignResolver({ library: 'vue-next' })]
    }),
    Components({
      resolvers: [TDesignResolver({ library: 'vue-next' })]
    })
  ],
  // 路径重命名
  // TODO: npm i @types/node -D 安装此依赖并且引入 resolve
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    }
  },
  server: {
    https: false, // 是否开启 https
    port: 4060, // 端口号
    host: '0.0.0.0', // 监听所有地址
    open: true, // 服务启动时是否自动打开浏览器
    cors: true, // 允许跨域
    proxy: {}, // 自定义代理规则
  },
  build: {
    // 设置最终构建的浏览器兼容目标
    target: 'es2015',
    // 构建后是否生成 source map 文件
    sourcemap: false,
    //  chunk 大小警告的限制（以 kbs 为单位）
    chunkSizeWarningLimit: 2000,
    // 启用/禁用 gzip 压缩大小报告
    reportCompressedSize: false,
  },
  css: {
    // 配置文件中新增CSS 预处理器相关配置即可实现 less 全局样式
    preprocessorOptions: {
      less: {
        // charset: false,
        // additionalData: '@import "./src/style/variables.less"'
        modifyVars: {
          hack: `true; @import (reference) "${resolve('src/style/global.less')}";`,
        },
        math: 'strict',
        javascriptEnabled: true,
      }
    }
  },
})
