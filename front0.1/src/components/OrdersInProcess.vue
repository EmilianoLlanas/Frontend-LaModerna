<template>
    <div id="test">
    <h1 id="header1"> Órdenes de venta en proceso </h1>

   <button @click="loadOrders">Actualizar</button>
   <div id="table" >

  <vue-table-dynamic :params="params"
      @select="onSelect"
      @selection-change="onSelectionChange"
      ref="table"></vue-table-dynamic>

    <!--  <OrderDetails :id="params.id" :cliente="params.cliente"></OrderDetails>-->
    <OrderDetails :id="params.id"></OrderDetails>
  </div>

  </div>
</template>

<script>
import VueTableDynamic from 'vue-table-dynamic';
import OrderDetails from '@/components/OrderDetails.vue';



export default {
  name: 'OrdersInProcess',

  data() {

    return {

      params: {

        data: [
          ['ID','Cliente' ,'Nombre','Fecha Orden','Artículo','Cantidad','Precio'],
          ["1", "BIMBO", "PAPELITO-SUAVE-500 ","2021-03-21","PAPELITO SUAVE","500","$50250.00"],
          ["2", "BARCEL", "PAPELITO-DURO-800 ","2021-02-1","PAPELITO DURO","800","$63250.00"],
          ["3", "TIA ROSA", "ALUMINIO-ARRUGADO-100 ","2021-04-2","ALUMINIO ARRUGADO","100","$5050.00"],
          ["4", "MOLINOS JORGE", "EMPAQUE-AWITADO-1500 ","2020-12-26","EMPAQUE AWITADO","1500","$70950.00"],
        ],
        id:[],
        header: 'row',
        border: true,
        stripe: true,
        showCheck: true,
        enableSearch: true,
        sort: [0, 1,2],
        pagination: true,
        pageSize: 10,
      },

    }
  },
  methods: {
    onSelect (isChecked, index, data) {
      console.log('onSelect: ', isChecked, index, data)
      console.log('Checked Data:', this.$refs.table.getCheckedRowDatas(true))


    },
    onSelectionChange (checkedDatas, checkedIndexs, checkedNum) {
      console.log('onSelectionChange: ', checkedDatas, checkedIndexs, checkedNum)
      this.params.id=checkedIndexs
    },
    orderReport(){
        //there will be a method here to establish connection with backend and sign up the articles' id and name, some day....
    },
    loadOrders(){
      alert('Actualizando tablas con base de datos')
    },

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
  width: 90%;
  margin-left: 3%;
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

#header1{
  margin: 2%;
  font-size: 30px;
}
</style>
