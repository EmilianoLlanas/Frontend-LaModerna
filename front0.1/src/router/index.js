import Vue from 'vue'
import Router from 'vue-router'
import OrderDetails from '@/components/OrderDetails'
import OrdersInProcess from '@/components/OrdersInProcess'
import CatalogArticles from '@/components/CatalogArticles'
import CatalogCompanies from '@/components/CatalogCompanies'
import CatalogPrices from '@/components/CatalogPrices'
import CatalogClients from '@/components/CatalogClients'
import CaptureOrder from '@/components/CaptureOrder'
import LogIn from '@/components/LogIn'
import CatalogAgents from '@/components/CatalogAgents'
import CatalogDelivered from '@/components/CatalogDelivered'
import CatalogFacturas from '@/components/CatalogFacturas'
import CatalogSaldo from '@/components/CatalogSaldo'
import CatalogWarehouse from '@/components/CatalogWarehouse'
import CatalogSharedArticles from '@/components/CatalogSharedArticles'
import RoleAssign from '@/components/RoleAssign'
import LogInPrincipal from '@/components/LogInPrincipal'
import CatalogDeliveryAddresses from '@/components/CatalogDeliveryAddresses'
import CatalogInventory from '@/components/CatalogInventory'


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
    },
    {
      path: '/CatalogAgents',
      name: 'CatalogAgents',
      component: CatalogAgents
    },
    {
      path: '/CatalogDelivered',
      name: 'CatalogDelivered',
      component: CatalogDelivered
    },
    {
      path: '/CatalogFacturas',
      name: 'CatalogFacturas',
      component: CatalogFacturas
    },
    {
      path: '/CatalogSaldo',
      name: 'CatalogSaldo',
      component: CatalogSaldo
    },
    {
      path: '/RoleAssign',
      name: 'RoleAssign',
      component: RoleAssign
    },

    {
      path: '/CatalogWarehouse',
      name: 'CatalogWarehouse',
      component: CatalogWarehouse
    },

    {
      path: '/CatalogSharedArticles',
      name: 'CatalogSharedArticles',
      component: CatalogSharedArticles
    },

    {
      path: '/CatalogDeliveryAddresses',
      name: 'CatalogDeliveryAddresses',
      component: CatalogDeliveryAddresses
    }, 
    {
      path: '/CatalogInventory',
      name: 'CatalogInventory',
      component: CatalogInventory
    }
    {
      path: '/OrderDetails',
      name: 'OrderDetails',
      component: OrderDetails
    },
  ]

})
