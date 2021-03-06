import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import VueRouter from 'vue-router'
import vuetify from './plugins/vuetify'



Vue.config.productionTip = false
Vue.use(VueRouter)
new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
