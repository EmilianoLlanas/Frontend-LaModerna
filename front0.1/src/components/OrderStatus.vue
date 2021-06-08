<template>

  <div id="content">

    <h1 id="header1"> Estatus de Órdenes de Venta </h1>

    <div id="card">

      <div id="cardheader"></div>

      <br>
      <br>

      <div id="buttons">
        <button @click="navOrdersInProcess"> Órdenes en Proceso </button>
        <button @click="navProcessedOrders"> Órdenes Procesadas </button>
      </div>

      <div id="table" >
        <vue-table-dynamic :params="params"
          @select="onSelect"
          @selection-change="onSelectionChange"
          ref="table">
        </vue-table-dynamic>

        <!--  <OrderDetails :id="params.id" :cliente="params.cliente"></OrderDetails>-->
        <OrderStatusDetails :id="params.id"></OrderStatusDetails>
      </div>

      <div id="buttons">
        <button @click="loadOrders"> Actualizar </button>
      </div>

    </div>
  </div>
</template>

<script>
import VueTableDynamic from 'vue-table-dynamic';
import OrderStatusDetails from '@/components/OrderStatusDetails.vue';

export default {
  name: 'OrderStatus',

  data() {

    return {

      params: {

        data: [
          ['ID','Cliente' ,'Nombre','Fecha Orden','Artículo','Cantidad','Precio'],
          ["1", "BIMBO", "PAPELITO-SUAVE-500 ","2021-03-21","PAPELITO SUAVE","500","$50250.00"],
          ["2", "BARCEL", "PAPELITO-DURO-800 ","2021-02-1","PAPELITO DURO","800","$63250.00"],
          ["3", "TIA ROSA", "ALUMINIO-ARRUGADO-100 ","2021-04-2","ALUMINIO ARRUGADO","100","$5050.00"],
          ["4", "MOLINOS JORGE", "EMPAQUE-AWITADO-1500 ","2020-12-26","EMPAQUE AWITADO","1500","$70950.00"],
          ["5", "BIMBO", "PAPELITO-SUAVE-500 ","2021-03-21","PAPELITO SUAVE","500","$50250.00"],
          ["6", "BARCEL", "PAPELITO-DURO-800 ","2021-02-1","PAPELITO DURO","800","$63250.00"],
          ["7", "TIA ROSA", "ALUMINIO-ARRUGADO-100 ","2021-04-2","ALUMINIO ARRUGADO","100","$5050.00"],
          ["8", "MOLINOS JORGE", "EMPAQUE-AWITADO-1500 ","2020-12-26","EMPAQUE AWITADO","1500","$70950.00"],
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
    navProcessedOrders() {
      this.$router.push({name: 'ProcessedOrders'})
    },
    navOrdersInProcess() {
      this.$router.push({name: 'OrdersInProcess'})
    },

  },
  components: { VueTableDynamic,OrderStatusDetails }
}
</script>

<style scoped>
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
  font-size: 24px;
  border-radius: 6px;
  border: transparent;
  margin-bottom: 40px;
}

button:hover{
  background-color: rgba(14,44,164,0.30);
}

#header1{
  margin: 2%;
  font-family: Verdana;
  font-size: 60px;
  color: #3B0EA4;
  text-align: center;
}

#table{
  width: 80%;
  margin-left: 10%;
  margin-top: 2%;
}

label{
  font-family: Verdana;
  font-weight: bold;
}

#card{
  background: #fff;
  width: 80%;
  margin: 5em;
  -webkit-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.14);
  -moz-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.14);
  box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.14);
  border-radius: 15px;
}

#cardheader{
  height: 20px;
  width: 100%;
  background: #3B0EA4;
}

#buttons{
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>