import Vue from 'vue'
import Router from 'vue-router'
import CatalogArticles from '@/components/CatalogArticles'
import LogIn from '@/components/LogIn'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "/",
      redirect: {
        name: "LogIn"
      }
    },
    {
      path: '/LogIn',
      name: 'LogIn',
      component: LogIn
       },
    {
      path: '/CatalogArticles',
      name: 'CatalogArticles',
      component: CatalogArticles
    }
  ]
})
