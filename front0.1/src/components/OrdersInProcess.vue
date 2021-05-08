<template>
    <div>
    <h1> Órdenes de venta en proceso </h1>

   <button @click="loadOrders">Actualizar </button>
   <button @click="orderReport"> Reporte de órdenes </button>
   <div style="width: 100%" >
  <vue-table-dynamic :params="params"
      @select="onSelect"
      @selection-change="onSelectionChange"
      ref="table"></vue-table-dynamic>
      <OrderDetails :Orders="testOrder"></OrderDetails>
  </div>
  </div>
</template>

<script>
import VueTableDynamic from 'vue-table-dynamic'
import SaleOrder from "@/classes/SaleOrder.js";
import OrderDetails from '@/components/OrderDetails.vue'

testOrder: {sId: 1;
  sClient: 'Bimbo';
  sName: 'Venta de papeles Suavecitos';
  sOrderDate: '2021-03-17';
  sArticle:'papeles suavecitos';
  sDescription: 'es papel que esta suave, saludos';
  sQuantity: 500;
  sPrice:1300;
  sSolicitedDate:'2021-03-18';
  factStatus:false;
  cxcStatus:false;
  preciosStatus:true;
  ingStatus:false;
  planStatus:true;

}

export default {
  name: 'OrdersInProcess',

  data() {

    return {
      params: {
        data: [
          ['ID','Cliente' ,'Nombre','Fecha Orden','Artículo','Cantidad','Precio'],
          [testOrder.sId, testOrder.sClient, testOrder.sName,testOrder.sOrderDate,testOrder.sArticle,testOrder.sQuantity,testOrder.sPrice]
        ],
        header: 'row',
        border: true,
        stripe: true,
        showCheck: true,
        enableSearch: true,
        sort: [0, 1,2],
        pagination: true,
        pageSize: 10,
      }
    }
  },
  methods: {
    onSelect (isChecked, index, data) {
      console.log('onSelect: ', isChecked, index, data)
      console.log('Checked Data:', this.$refs.table.getCheckedRowDatas(true))
    },
    onSelectionChange (checkedDatas, checkedIndexs, checkedNum) {
      console.log('onSelectionChange: ', checkedDatas, checkedIndexs, checkedNum)
    },
    orderReport(){
        //there will be a method here to establish connection with backend and sign up the articles' id and name, some day....
        let routeData = this.$router.resolve({name: 'OrderDetails', query: {data: "test"}});
        window.open(routeData.href, '_blank');
    },
    loadOrders(){
        //there will be a method here to establish connection with backend and update the table, some day....
    }
  },
  components: { VueTableDynamic,OrderDetails }
}
</script>

<style scoped>
</style>
