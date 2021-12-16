import { createApp } from 'vue'
import App from './App.vue'
import {store} from './photos/store'
import {router} from './photos/router'
//createApp(App).use(store).use(router).mount('#app')
const app = createApp(App);

app.use(store)
app.use(router)
app.mount('#app')
