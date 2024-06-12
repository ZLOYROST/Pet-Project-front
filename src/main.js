import { createApp } from 'vue'
import './styles/style.css'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import { routes } from './router.js'

import 'material-design-icons-iconfont/dist/material-design-icons.css' 
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { store } from './store/store.js'

import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/dist/vuetify.css'

const vuetify = createVuetify({
  components,
  directives,
})


const app = createApp(App)

  const router = createRouter({
    history: createWebHistory(),
    routes
  })


  app.use(router)
  app.use(vuetify)
  app.use(store)
  app.mount('#app')

  