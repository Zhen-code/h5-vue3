import { createApp } from 'vue'
import { Button, Calendar, Cell, CellGroup } from 'vant'; // 按需引入组件不需加载样式
import App from './App.vue'
import router from './router'
import store from './store'
// import Vant from 'vant'; // 导入所有组件
// import 'vant/lib/index.css'; // 全局引入样式
// import 'lib-flexible/flexible'
import './utils/flexible'
import '@vant/touch-emulator'; // 桌面端适配
const app = createApp(App) // 创建实例

// 通过 app.component 注册
// 注册完成后，在模板中通过 <van-button> 标签来使用按钮组件
// app.component(Button.name, Button);
// app.use(Button)mount('#app')
app.use(Button).use(Calendar).use(Cell).use(CellGroup).use(store).use(router).mount('#app')
