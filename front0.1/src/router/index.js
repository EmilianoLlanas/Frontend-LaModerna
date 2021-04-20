import Vue from 'vue'
import Router from 'vue-router'
import CatalogArticles from '@/components/CatalogArticles'
import CatalogCompanies from '@/components/CatalogCompanies'
import CatalogPrices from '@/components/CatalogPrices'
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
    },
    {
      path: '/CatalogCompanies',
      name: 'CatalogCompanies',
      component: CatalogCompanies
    },
    {
      path: '/CatalogPrices',
      name: 'CatalogPrices',
      component: CatalogPrices
    }
  ]
})
