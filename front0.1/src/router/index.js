import Vue from 'vue'
import Router from 'vue-router'
import OrderDetails from '@/components/Orders/OrderDetails'
import OrdersInProcess from '@/components/Orders/OrdersInProcess'
import CatalogArticles from '@/components/Catalogs/CatalogArticles'
import CatalogCompanies from '@/components/Catalogs/CatalogCompanies'
import CatalogPrices from '@/components/Catalogs/CatalogPrices'
import CatalogClients from '@/components/Catalogs/CatalogClients'
import CaptureOrder from '@/components/Orders/CaptureOrder'
import LogIn from '@/components/LogIn'
import CatalogAgents from '@/components/Catalogs/CatalogAgents'
import CatalogDelivered from '@/components/Catalogs/CatalogDelivered'
import CatalogFacturas from '@/components/Catalogs/CatalogFacturas'
import CatalogSaldo from '@/components/Catalogs/CatalogSaldo'
import CatalogWarehouse from '@/components/Catalogs/CatalogWarehouse'
import SharedArticles from '@/components/SharedArticles'
import CatalogSharedArticles from '@/components/Catalogs/CatalogSharedArticles'
import RoleAssign from '@/components/RoleAssign'
import LogInPrincipal from '@/components/LogInPrincipal'
import CatalogDeliveryAddresses from '@/components/Catalogs/CatalogDeliveryAddresses'
import CatalogInventory from '@/components/Catalogs/CatalogInventory'
import ProcessedOrders from '@/components/Orders/ProcessedOrders'
import OrderStatus from '@/components/Orders/OrderStatus'
import AuthorizeDates from '@/components/Authorizations/AuthorizeDates'
import MenuAGE from '@/components/MenuAGE'
import OrderEdit from '@/components/Orders/OrderEdit'
import ConsultSalesOrders from '@/components/Sales/ConsultSalesOrders'
import AllSalesReportDetails from "@/components/Sales/AllSalesReportDetails"
import AllSalesReport from '@/components/Sales/AllSalesReport'
import OrderStatusCxc from '@/components/Orders/OrderStatusCxc'
import AuthorizeOrderCxc from '@/components/Authorizations/AuthorizeOrderCxc'
import AuthorizationING from '@/components/Authorizations/AuthorizationING'
import BlockClient from '@/components/BlockClient'
import AuthorizeOrderCST from '@/components/Authorizations/AuthorizeOrderCST'
import AuthorizeVTA from '@/components/Authorizations/AuthorizeVTA'
import Backup from '@/components/Backup'
import SearchArticlesperClient from '@/components/SearchArticlesperClient'
import TimeReport from '@/components/TimeReport'
import ReportGenerator from '@/components/ReportGenerator'
import Templates from '@/components/Templates'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "/",
      redirect: {
        name: "LogInPrincipal"
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
      path: '/AllSalesReportDetails',
      name: 'AllSalesReportDetails',
      component: AllSalesReportDetails
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
    },
    {
      path: '/TimeReport',
      name: 'TimeReport',
      component: TimeReport
    },
    {
      path: '/ReportGenerator',
      name: 'ReportGenerator',
      component: ReportGenerator
    },
    {
      path:'/Templates',
      name:'Templates',
      component: Templates
    }
  ]
})
