import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')

//Global filter function 

Vue.filter('snippet', val=>{
    if(!val || typeof(val) != 'string') return ''
    val = val.slice(0, 50)
    console.log(val)
    return val
})

// app.js
const app = createApp(App)

app.config.globalProperties.$filters = {
  currencyUSD(value) {
    return '$' + value
  }
}

new Vue ({
    render: h => h(App)
}).$mount('#app')