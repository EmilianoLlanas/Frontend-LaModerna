<template>
    <div id="test">
    <h1> Reporte de ordenes de venta </h1>
    <form>
      <label>Fecha de Orden</label>
      <br>
      <label>Desde:</label>
      <input v-model="fromDate" placeholder="Fecha">
      <label>Hasta:</label>
      <input v-model="toDate" placeholder="Fecha">
      <br>
      <br>
      <label>Folio Baan</label>
      <br>
      <label>Desde:</label>
      <input v-model="fromBaan" placeholder="Folio">
      <label>Hasta:</label>
      <input v-model="toBaan" placeholder="Folio">
      <br>
      <br>
      <label>Cliente</label>
      <br>
      <label>Desde:</label>
      <input v-model="fromClient" placeholder="No Cliente">
      <label>Hasta:</label>
      <input v-model="toClient" placeholder="No Cliente">
      <br>
      <br>
      <label>Artículo</label>
      <br>
      <label>Desde:</label>
      <input v-model="fromItem" placeholder="No Articulo">
      <label>Hasta:</label>
      <input v-model="toItem" placeholder="No Articulo">
      <br>
      <br>


  </form>





   <button @click="findOrders">Crear reporte</button>



   <div id="table" >

  <vue-table-dynamic :params="params"
      @select="onSelect"
      @selection-change="onSelectionChange"
      ref="table"></vue-table-dynamic>
        <AllSalesReportDetails :id="params.id"></AllSalesReportDetails>
  </div>

  </div>
</template>

<script>
import VueTableDynamic from 'vue-table-dynamic';
import AllSalesReportDetails from '@/components/AllSalesReportDetails.vue';



export default {
  name: 'AllSalesReport',

  data() {

    return {
      fromDate:'',
      toDate:'',
      fromBaan:'',
      toBaan:'',
      fromClient:'',
      toClient:'',
      fromItem:'',
      toItem:'',

      params: {

        data: [
          ['Orden','Orden Baan' ,'CIL','Nombre','F.Orden','F.Solicitud','F. Def','FACT','CXC','PRE','ING','VB','Baan','BervC','Rep','Artículo','Unidad','Notas'],
          ["1", "1881", "1991","Sabritas","15-03-19","18-03-19","18-03-19","SI","NO","NO","SI","NO","SI","NO","NO","1991","12","LSL"],
          ["2", "1882", "2021","Barcel","15-03-19","18-03-19","18-03-19","SI","SI","SI","SI","SI","SI","SI","SI","2020","192","MKL"],


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
    findOrders(){
      alert('Buscando Ordenes')
    },

  },
  components: { VueTableDynamic,AllSalesReportDetails }
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
</style>
