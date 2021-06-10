<template>
    <div id="test">
    <h1 id="header1"> Captura de ordenes </h1>
    <div class="inputForm">
    <form>
      <label>Cliente</label>
      <br>
      <input v-model="aCliente" placeholder="Cliente">
      <br>
      <label>No. de orden</label>
      <br>
      <input v-model="aNoOrden" placeholder="No de cliente">
      <br>
      <label>Fecha de Captura</label>
      <br>
      <datepicker placeholder="Fecha de entrega" v-model="aFecha" :format="customFormatter"></datepicker>
      <br>
      <label>Direccion de entrega</label>
      <br>
      <input v-model="aDireccion" placeholder="Direccion de entrega">
   </form>
  </div>
   <div id="table">
  <vue-table-dynamic :params="params"
      @select="onSelect"
      @selection-change="onSelectionChange"
      ref="table"></vue-table-dynamic>
      <form>
        <label>Observaciones</label>
        <br>
        <textarea v-model="aObservaciones" placeholder="Observaciones de la orden"></textarea>
        <br>
        <br>
      </form>
  </div>
  <br>
  <button @click="save"> Guardar </button>
  <button @click="cancel"> Cancelar </button>
  <br>
  </div>
</template>

<script>
import VueTableDynamic from 'vue-table-dynamic'
import Datepicker from 'vuejs-datepicker'
import moment from 'moment'
export default {
  name: 'CaptureOrder',
  data() {
    return {
    aCliente:'',
    aNoOrden:'',
    aFecha:'',
    aDireccion:'',
    aObservaciones:'',
      params: {
        data: [
          ['Articulo','Cantidad','Fecha solicitata'],
          ['art','100','dd/mm/aa'],
          ['art','100','dd/mm/aa'],
          ['art','100','dd/mm/aa'],
          ['art','100','dd/mm/aa'],
          ['art','100','dd/mm/aa'],
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
    save(){
      //aqui habra una conexion a backend para guardar la orden
      if(this.aCliente && this.aNoOrden && this.aFecha && this.aDireccion && this.aObservaciones){

      }else{
        if(!this.aCliente){
          alert('campo cliente vacio')
        }
        if(!this.aNoOrden){
          alert('campo numero de orden vacio')
        }
        if(!this.aFecha){
          alert('campo fecha vacio')
        }
        if(!this.aDireccion){
          alert('campo Direccion vacio')
        }
        if(!this.aObservaciones){
          alert('campo Observaciones vacio')
        }
      }
      this.aCliente='';
      this.aNoOrden='';
      this.aFecha='';
      this.aDireccion='';
      this.aObservaciones='';
    },
    cancel(){
      //aqui habra una conexion a backend para cancelar la captura
      this.aCliente='';
      this.aNoOrden='';
      this.aFecha='';
      this.aDireccion='';
      this.aObservaciones='';
    },
    customFormatter(date) {
     return moment(date).format('YYYY/MM/DD');
   }
  },
  components: { VueTableDynamic, Datepicker }
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
