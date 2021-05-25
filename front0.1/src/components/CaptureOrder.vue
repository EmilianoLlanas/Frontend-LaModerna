<template>

  <div id="content">

    <h1 id="header1"> Captura de Órdenes </h1>

    <div id="card">

      <div id="cardheader"></div>

      <div class="inputForm">
        <form>
          <label>Cliente</label>
          <br>
          <input v-model="aCliente" placeholder="Cliente">
          <br>
          <label>No. de orden</label>
          <br>
          <input v-model="aNoOrden" placeholder="No de cliente" disabledDates="disabledDates" type="number">
          <br>
          <label>Direccion de entrega</label>
          <br>
          <input v-model="aDireccion" placeholder="Direccion de entrega">
          <br>
          <label>Observaciones</label>
          <br>
          <input v-model="aObservaciones" placeholder="Observaciones de la orden"></textarea>
          <br>
          <label>Fecha de Captura</label>
          <br>
          <datepicker placeholder="Fecha de entrega" v-model="aFecha" :format="customFormatter" :disabledDates="disabledDates"></datepicker>
        </form>
      </div>

      <div id="buttons">
        <button @click="save"> Guardar </button>
        <button @click="cancel"> Cancelar </button>
      </div>

      <div id="table">
        <vue-table-dynamic :params="params"
          @select="onSelect"
          @selection-change="onSelectionChange"
          ref="table">
        </vue-table-dynamic>
      </div>

    </div>
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
    disabledDates: {
          to: new Date(Date.now() - 8640000)
    },
    errors:[],
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
      this.errors=[]
      if(this.aCliente && this.aNoOrden && this.aFecha && this.aDireccion && this.aObservaciones){

      }else{
        if(!this.aCliente){
          this.errors.push('campo cliente vacio')
        }
        if(!this.aNoOrden){
          this.errors.push('campo numero de orden vacio')
        }
        if(!this.aFecha){
          this.errors.push('campo fecha vacio')
        }
        if(!this.aDireccion){
          this.errors.push('campo Direccion vacio')
        }
        if(!this.aObservaciones){
          this.errors.push('campo Observaciones vacio')
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
