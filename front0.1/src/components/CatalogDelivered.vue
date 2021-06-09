<template>
    <div id="test">
    <h1 id="header1"> Catálogo de Entregadas </h1>
    <div class="inputForm">
    <form>
      <label>Orden</label>
      <br>
      <input v-model="delivOrd" placeholder="Número de Orden">
      <br>
      <label>Compañia</label>
      <br>
      <input v-model="delivCom" placeholder="Compañia">
      <br>
      <label>Fecha</label>
      <br>
       <datepicker placeholder="Fecha de entrega" v-model="delivDate" :format="customFormatter"></datepicker>

   </form>
  </div>
   <button @click="signUpDeliver"> Dar de alta </button>
   <button @click="signDownDeliver"> Dar de baja </button>
   <button @click="loadDeliver">Actualizar </button>
   <div id="table">
  <vue-table-dynamic :params="params"
      @select="onSelect"
      @selection-change="onSelectionChange"
      ref="table"></vue-table-dynamic>

  </div>
  </div>
</template>

<script>
import VueTableDynamic from 'vue-table-dynamic'
import Datepicker from 'vuejs-datepicker'
import moment from 'moment'

export default {
  name: 'CatalogDelivered',
  data() {
    return {
      delivOrd:'',
      delivCom:'',
      delivDate:'',
      params: {
        data: [
          ['Orden', 'Compañia', 'Fecha'],
          ['1024', 'Zara', '12/02/19'],
          ['0235', 'Barcel', '01/10/20'],
          ['0066', 'Totis', '27/08/19'],
        ],
        deleteData:[],
        header: 'row',
        border: true,
        stripe: true,
        showCheck: true,
        enableSearch: true,
        sort: [0, 1, 2],
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
      this.params.deleteData=checkedIndexs
    },
    signUpDeliver(){
        if(this.delivOrd==''||this.delivCom==''||this.delivDate=='')
        {
          alert('Por favor, llene todos los campos para registrar la entrega')
        }
        else
        {
          this.params.data.push([this.delivOrd, this.delivCom, this.customFormatter(this.delivDate)]);
        }
    },
    signDownDeliver(){
      this.delivOrd='';
      this.delivCom='';
      this.delivDate='';
      console.log(this.params.deleteData.length)
      for (var i = this.params.deleteData.length-1; i>0 ; i--) {
      this.params.data.splice(this.params.deleteData[i], 1)
      }
    },
    loadDeliver(){
        this.delivOrd='';
        this.delivCom='';
        this.delivDate='';
        alert("Actualizando informacion...");
    },
    customFormatter(date) {
     return moment(date).format('YYYY/MM/DD');
   }
  },
  components: { VueTableDynamic,Datepicker }
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
#test{
  background-color: rgba(33,52,133,0.20);
  margin: 1%;
  color: #3B0EA4;
  font-family: "GOTY0", "GOTY1", "GOTY2", verdana;
}
#header1{
  margin: 2%;
  font-size: 30px;
}
#table{
  width: 80%;
  margin-left: 10%;
  margin-top: 2%;
}
</style>
