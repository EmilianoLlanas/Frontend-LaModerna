// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuelidate from 'vuelidate'
import App from './App'
import router from './router'
import VueTableDynamic from 'vue-table-dynamic'
import store from './store'


Vue.use(Vuelidate)

Vue.config.productionTip = false
Vue.use(VueTableDynamic)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  store,
  template: '<App/>'
})
