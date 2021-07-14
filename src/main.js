import { createApp } from 'vue'
import App from './App.vue'

import router from './router'

import store from '@/store';

import api from '@/request/api.js'

import i18n from './i18n/i18n'

const createVue = createApp(App)

createVue.config.globalProperties.$api = api

createVue.use(store).use(api).use(router).use(i18n).mount('#app')

