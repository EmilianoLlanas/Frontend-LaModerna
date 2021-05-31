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
import SharedArticles from '@/components/SharedArticles'
import CatalogSharedArticles from '@/components/CatalogSharedArticles'
import RoleAssign from '@/components/RoleAssign'
import LogInPrincipal from '@/components/LogInPrincipal'
import CatalogDeliveryAddresses from '@/components/CatalogDeliveryAddresses'
import CatalogInventory from '@/components/CatalogInventory'
import ProcessedOrders from '@/components/ProcessedOrders'
import OrderStatus from '@/components/OrderStatus'
import AuthorizeDates from '@/components/AuthorizeDates'
import MenuAGE from '@/components/MenuAGE'
import OrderEdit from '@/components/OrderEdit'
import ConsultSalesOrders from '@/components/ConsultSalesOrders'
import AllSalesReport from '@/components/AllSalesReport'
import OrderStatusCxc from '@/components/OrderStatusCxc'
import AuthorizeOrderCxc from '@/components/AuthorizeOrderCxc'
import AuthorizationING from '@/components/AuthorizationING'
import BlockClient from '@/components/BlockClient'
import AuthorizeOrderCST from '@/components/AuthorizeOrderCST'
import AuthorizeVTA from '@/components/AuthorizeVTA'
import Backup from '@/components/Backup'
import SearchArticlesperClient from '@/components/SearchArticlesperClient'

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
      path: '/SharedArticles',
      name: 'SharedArticles',
      component: SharedArticles
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
    },
    {
      path: '/OrderDetails',
      name: 'OrderDetails',
      component: OrderDetails
    },
    {
      path: '/ProcessedOrders',
      name: 'ProcessedOrders',
      component: ProcessedOrders
    },
    {
    path: '/OrderStatus',
    name: 'OrderStatus',
    component: OrderStatus
  },
  {
      path: '/AuthorizeDates',
      name: 'AuthorizeDates',
      component: AuthorizeDates
    },
    {
      path: '/OrderEdit',
      name: 'OrderEdit',
      component: OrderEdit
    },
    {
      path: '/MenuAGE',
      name: 'MenuAGE',
      component: MenuAGE
    },
    {
      path: '/ConsultSalesOrders',
      name: 'ConsultSalesOrders',
      component: ConsultSalesOrders
    },
    {
      path: '/AllSalesReport',
      name: 'AllSalesReport',
      component: AllSalesReport
    },
    {

      path: '/OrderStatusCxc',
      name: 'OrderStatusCxc',
      component: OrderStatusCxc
    },
    {
      path: '/AuthorizeOrderCxc',
      name: 'AuthorizeOrderCxc',
      component: AuthorizeOrderCxc
    },
    {
      path: '/AuthorizationING',
      name: 'AuthorizationING',
      component: AuthorizationING
    },
    {
      path:'/BlockClient',
      name:'BlockClient',
      component: BlockClient
    },
    {
      path:'/AuthorizeOrderCST',
      name:'AuthorizeOrderCST',
      component: AuthorizeOrderCST
    },
    {
      path: '/AuthorizeVTA',
      name: 'AuthorizeVTA',
      component: AuthorizeVTA
    },
    {
      path: '/Backup',
      name: 'Backup',
      component: Backup
    },
    {
      path: '/SearchArticlesING',
      name: 'SearchArticlesperClient',
      component: SearchArticlesperClient
    }
  ]
})
