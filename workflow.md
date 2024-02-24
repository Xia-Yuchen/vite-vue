# 项目搭建流程



#### 技术栈

- ⚡️ Vite 3 - 构建工具（就是快！）
- 🖖 Vue 3 - 渐进式 JavaScript 框架
- 🚦 Vue Router - 官方路由管理器
- 📦 Pinia - 值得你喜欢的 Vue Store
- 💻 TDesign - TDesign 适配桌面端的组件库
- 🎨 Less - CSS 预处理器
- 🔗 Axios - 一个基于 promise 的网络请求库，可以用于浏览器和 node.js
- 🧰 Husky + Lint-Staged - Git Hook 工具
- 🛡️ EditorConfig + ESLint + Prettier + Stylelint - 代码规范
- 🔨 Commitizen + Commitlint - 提交规范
- 💡 GitHub Actions - 自动部署



#### Vite 基础配置

Vite 配置文件 vite.config.js 位于项目根目录下，项目启动时会自动读取。

本项目针对公共基础路径、自定义路径别名、服务器选项、构建选项等做了如下基础配置：

```js
import { defineConfig } from 'vite';
import { resolve } from 'path';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
    base: './',
    plugins: [
      vue(),
    ],
    resolve: {
      alias: {
        '@': resolve(__dirname, './src') ,
      },
    },
    server: {
      // 是否开启 https
      https: false,
      // 端口号
      port: 3000,
      // 监听所有地址
      host: '0.0.0.0',
      // 服务启动时是否自动打开浏览器
      open: true,
      // 允许跨域
      cors: true,
      // 自定义代理规则
      proxy: {},
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
});
```



#### 目录结构

```
├── dist/
└── src/
    ├── api/                       // 接口请求目录
    ├── assets/                    // 静态资源目录
    ├── common/                    // 通用类库目录
    ├── components/                // 公共组件目录
    ├── router/                    // 路由配置目录
    ├── store/                     // 状态管理目录
    ├── style/                     // 通用样式目录
    ├── utils/                     // 工具函数目录
    ├── views/                     // 页面组件目录
    ├── App.vue
    ├── main.js
├── tests/                         // 单元测试目录
├── index.html
├── jsconfig.json                  // JavaScript 配置文件
├── vite.config.js                 // Vite 配置文件
└── package.json
```

