import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import store from './store'
/* 
TODO: 使用 unplugin-vue-components 和 unplugin-auto-import 来实现自动导入下面可以不用
import TDesign from 'tdesign-vue-next' 
*/

// 引入Tdesign组件库的少量全局样式变量
import 'tdesign-vue-next/es/style/index.css'

createApp(App).use(router).use(store).mount('#app')
