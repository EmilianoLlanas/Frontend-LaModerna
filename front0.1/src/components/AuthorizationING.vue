<template>
    <div id="test">
    <h1 id="header1"> Autorización de ingeniería </h1>
    <div class="inputForm">
    <form>
      <label>Orden Baan</label>
      <br>
      <input v-model="soBaan" placeholder="Orden Baan">
      <br>
      <label>No. de orden</label>
      <br>
      <input v-model="soNoOrden" placeholder="No de orden">
      <br>
      <label>Cliente</label>
      <br>
      <input v-model="soCliente" placeholder="Cliente">
      <br>
   </form>
   <br>
   
  <button @click="search"> Buscar </button>
  </div>
   <div>
  <vue-table-dynamic :params="params"
      @select="onSelect"
      @selection-change="onSelectionChange"
      ref="table"></vue-table-dynamic>
      <SalesOrderStatusDetails :id="params.id"></SalesOrderStatusDetails>
  </div>
  
  <div>
    





<table id="firstTable">
  <thead>
    <tr>
      <th>ORDEN</th>
      <th>ORDEN BAAN</th>
      <th>PRODUCTO</th>
      <th> Fecha de entrega </th>
      <th> Fecha definida </th>
      <th> Stock </th>
      <th> Unidades </th>
      <th>SUAJE </th>
      <th>GRABADO </th>
      <th>Autorización ING </th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="row in rows" v-bind:key="row">
      <td>{{row.order}}</td>
      <td>{{row.orderBaan}}</td>
      <td>{{row.product}}</td>
      <td>{{row.dateRequired}}</td>
      <td>{{row.datePlaned}}</td>
      <td>{{row.stock}}</td>
      <td>{{row.units}}</td>
      <td><input type="checkbox" id="checkboxSuaje" v-model= row.suaje></td>
      <td><input type="checkbox" id="checkboxGrabado" v-model= row.grabado></td>
      <td><input type="checkbox" :disabled="autorization ? false : true" id="checkboxAuthorization" v-model= row.autorization></td>
    </tr>
  </tbody>
</table>





  </div>

  <br>
  </div>


  
</template>

<script>
import VueTableDynamic from 'vue-table-dynamic';
import SalesOrderStatusDetails from '@/components/SalesOrderStatusDetails.vue';
export default {
  name: 'AuthorizationING',
  data() {
    return {
      rows: [
      {order:'1', orderBaan:'135', client:'0303', suaje:true, grabado:false,  name:'BIMBO', product:'PAPELITO-SUAVE-500',dateOrdered:'2021-03-21', dateRequired:'2021-04-21', datePlaned:'2021-04-22', stock:'4056', units:'1000', autorization:false },          
      {order:'2', orderBaan:'435', client:'0403', suaje:false, grabado:true,  name:'BARCEL', product:'CAJITA-400',dateOrdered:'2021-06-21', dateRequired:'2021-08-21', datePlaned:'2021-08-20', stock:'2050', units:'3000', autorization:false }          
    ],
      
    soCliente:'',
    soNoOrden:'',
    soBaan:'',
      params: {
        data: [
          
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
    },
    search(){
      //aqui habra una conexion a backend para guardar la orden
      this.soCliente='',
      this.soNoOrden='',
      this.soBaan=''
    }
  },
  components: { VueTableDynamic, SalesOrderStatusDetails },
  computed: {
    "columns": function columns() {
      if (this.rows.length == 0) {
        return [];
      }
      return Object.keys(this.rows[0])
    }
    },
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
