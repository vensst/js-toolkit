import {createApp} from 'vue'
import './style.css'
import App from './App.vue'
// 引入 components 下所有组件
import components from './components'

let app = createApp(App);

app.use(components).mount('#app')
