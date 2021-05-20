<template>
    <div id="test">
    <h1 id="header1"> Consulta de órdenes de venta</h1>
   <div>
  <vue-table-dynamic :params="params"
      @select="onSelect"
      @selection-change="onSelectionChange"
      ref="table"></vue-table-dynamic>
      <SalesOrderStatusDetails :id="params.id"></SalesOrderStatusDetails>
  </div>
  
  <br>
  </div>
</template>

<script>
import VueTableDynamic from 'vue-table-dynamic';
import SalesOrderStatusDetails from '@/components/SalesOrderStatusDetails.vue';
export default {
  name: 'ConsultSalesOrders',
  data() {
    return {
    soCliente:'',
    soNoOrden:'',
    soBaan:'',
      params: {
        data: [
          ['Orden','Orden Baan','Cliente', 'Nombre', 'Fecha de orden', 'Fecha de entrega','Fecha definida'],
          ["1","135","BIMBO",'PAPELITO-SUAVE-500','2021-03-21','2021-04-21','2021-04-22'],
          ["2","256","BARCEL",'PAPELITO-DURO-800','2021-02-1','2021-05-21','2021-05-22'],
          ["3","389","TIA ROSA",'ALUMINIO-ARRUGADO-100','2021-04-2','2021-04-21','2021-04-22'],
          ["4","412","MOLINOS JORGE",'EMPAQUE-AWITADO-1500','2020-12-26','2021-04-21','2021-04-22'],
          ["5","545","BIMBO",'PAPELITO-SUAVE-500','2021-03-21','2021-04-21','2021-04-22'],
          ["6","678","BARCEL",'PAPELITO-DURO-800','2021-02-1','2021-04-21','2021-04-22'],
          ["7","723","TIA ROSA",'ALUMINIO-ARRUGADO-100','2021-04-2','2021-04-21','2021-04-22'],
          ["8","856","MOLINOS JORGE",'EMPAQUE-AWITADO-1500','2020-12-26','2021-04-21','2021-04-22']
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
      this.params.id=checkedIndexs
    }
    
  },
  components: { VueTableDynamic, SalesOrderStatusDetails }
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

#header1{
  margin: 2%;
  font-size: 30px;
}

</style>
