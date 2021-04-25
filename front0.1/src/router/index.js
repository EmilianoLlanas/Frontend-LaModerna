import Vue from 'vue'
import Router from 'vue-router'
import OrdersInProcess from '@/components/OrdersInProcess'
import CatalogArticles from '@/components/CatalogArticles'
import CatalogCompanies from '@/components/CatalogCompanies'
import CatalogPrices from '@/components/CatalogPrices'
import CatalogClients from '@/components/CatalogClients'
import CaptureOrder from '@/components/CaptureOrder'
import LogIn from '@/components/LogIn'
import LogInPrincipal from '@/components/LogInPrincipal'

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
         path: '/LogInPrincipal',
         name: 'LogInPrincipal',
         component: LogInPrincipal
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
    },
    {
      path: '/CatalogClients',
      name: 'CatalogClients',
      component: CatalogClients
    },
    {
      path: '/CaptureOrder',
      name: 'CaptureOrder',
      component: CaptureOrder
    },
    {
    path: '/OrdersInProcess',
    name: 'OrdersInProcess',
    component: OrdersInProcess
  }
  ]
})
