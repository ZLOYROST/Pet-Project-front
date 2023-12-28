import { createApp } from 'vue'
import './styles/style.css'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import { routes } from './router.js'

import 'material-design-icons-iconfont/dist/material-design-icons.css' // Ensure you are using css-loader
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { store } from './store/store.js'

import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/dist/vuetify.css'


// axios.defaults.headers.common['Accept'] = 'application/json'
// import axios from 'axios'

const vuetify = createVuetify({
  components,
  directives,
})





const app = createApp(App)

  const router = createRouter({
    history: createWebHistory(),
    routes
  })

  // axios.post('http://127.0.0.1:8000',{
  //   "name": "direct",
  //   "email": "xibik40313@apdiv.com",
  //   "password": "111Qwe"
  // })
  // .then(response => {
  //   console.log(response)
  // })
  // .catch(error => {
  //   console.log(error,'111')
  // });

  app.use(router)
  app.use(vuetify)
  app.use(store)
  app.mount('#app')

  