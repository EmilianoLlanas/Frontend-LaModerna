<template>
    <div id="test">
    <h1> Reporte de ordenes de venta </h1>
    <form>
      <div id="error">
        <ul>
          <li v-for="error in errors" v-bind:key="error">{{error}}</li>
        </ul>
     </div>
      <label>Fecha de Orden</label>
      <br>
      <label>Desde:</label>
      <datepicker v-model="fromDate" placeholder="Fecha":format="customFormatter"></datepicker>
      <label>Hasta:</label>
      <datepicker v-model="toDate" placeholder="Fecha":format="customFormatter"></datepicker>
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
    </div>
  </div>
</template>

<script>
import VueTableDynamic from 'vue-table-dynamic';
import AllSalesReportDetails from '@/components/AllSalesReportDetails.vue';
import Datepicker from 'vuejs-datepicker'
import moment from 'moment'



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
      errors:[],

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
      this.errors=[];
      if((this.fromDate && this.toDate) || (this.fromBaan && this.toBaan) || (this.fromClient&& this.toClient) || (this.fromItem&& this.toItem))
      {
        alert('Buscando Ordenes')
      }
      else
      {
        alert("Por favor, llene al menos un campo");

      }

    },
    customFormatter(date) {
      return moment(date).format('YYYY/MM/DD');
    }

  },

  components: { VueTableDynamic,AllSalesReportDetails,Datepicker }
}
</script>

<style scoped>
.inputForm{
  width: 90%;
  clear: both;
  color: #213485;
  margin: 3%;
  font-size: 20px;
  font-family: Verdana;
  font-size: 20px;
}

.inputForm input{
  width: 100%;
  clear: both;
  margin-top: 2%;
  margin-bottom: 5%;
  height: 50px;
  font-size: 20px;
  font-family: "GOTY0", "GOTY1", "GOTY2", verdana;
  opacity: 50%;
  border-radius: 6px;
  border: transparent;
  background: #f2f2f2;
  padding: 10px;
  color: #213485;
}

.inputForm textarea{
  padding: 10px;
  width: 150%;
  height: 90px;
  color: #213485;
  margin-top: 2%;
  margin-bottom: 0%;
  font-family: "GOTY0", "GOTY1", "GOTY2", verdana;
  opacity: 50%;
  border-radius: 6px;
  border: transparent;
  background: #f2f2f2;
  width: 100%; 
  font-family: Verdana;
  font-size: 20px;
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

#error{
  color: red;
}
</style>
