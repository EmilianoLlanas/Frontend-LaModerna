<template>
    <div id="test">
    <h1> Órdenes de venta en proceso </h1>

   <button @click="loadOrders">Actualizar </button>
   <button @click="orderReport"> Reporte de órdenes </button>
   <div id="table" >
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
.inputForm {
  width: 400px;
  clear: both;
  color: #213485;
  margin: 3%;
}

.inputForm  input {
  width: 100%;
  clear: both;
  margin-top: 2%;
  margin-bottom: 5%;
  font-family: "GOTY0", "GOTY1", "GOTY2", verdana;
  opacity: 50%;
  border-radius: 6px;
  border: transparent;
}

.inputForm  textarea {
  width: 150%;
  height: 90px;
  color: #213485;
  margin-top: 2%;
  margin-bottom: 0%;
  font-family: "GOTY0", "GOTY1", "GOTY2", verdana;
  opacity: 50%;
  border-radius: 6px;
  border: transparent;
}

#test{
  background-color: rgba(33,52,133,0.20);
  margin: 1%;
  color: #3B0EA4;
  font-family: "GOTY0", "GOTY1", "GOTY2", verdana;
}

#table{
  width: 80%;
  margin-left: 10%;
  margin-top: 2%;
}

button{
  margin-top: 0%;
  margin-left: 3%;
  color: #0E2CA4;
  opacity: 70%;
  font-family: "GOTY0", "GOTY1", "GOTY2", verdana;
  text-shadow: 1px 1px rgba(14,44,164,0.50);
  background-color: transparent;
  padding: 5px;
  font-weight: 700;
  font-size: 12px;
  border-radius: 6px;
  border: transparent;
}

button:hover{
  background-color: rgba(14,44,164,0.30) ;
}
</style>
