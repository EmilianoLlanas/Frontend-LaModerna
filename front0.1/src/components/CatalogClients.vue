<template>
    <div id="test">
    <h1 id="header1"> Catálogo de Clientes </h1>
    <div class="inputForm">
    <form>
      <label>Compañia</label>
      <br>
      <input v-model="aCompania" placeholder="Compañia">
      <br>
      <label>Cliente</label>
      <br>
      <input v-model="aCliente" placeholder="Cliente">
      <br>
      <label>Nombre B</label>
      <br>
      <input v-model="aNombreA" placeholder="Nombre A">
      <br>
      <label>Nombre B</label>
      <br>
      <input v-model="aNombreB" placeholder="Nombre B">
      <br>
      <label>Estatus</label>
      <br>
      <input v-model="aEstatus" placeholder="Estatus">
   </form>
  </div>
   <button @click="signUpClient"> Dar de alta </button>
   <button @click="signDownClient"> Dar de baja </button>
   <button @click="loadClient">Actualizar </button>
   <button @click="generateReport">Reportes </button>
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
export default {
  name: 'CatalogClients',
  data() {
    return {
    aCompania:'',
    aCliente:'',
    aNombreA:'',
    aNombreB:'',
    aEstatus:'',
      params: {
        data: [
          ['Compañia','Cliente','Nombre A','Nombre B','Estatus'],
          [0,1,2,3,4],
          [0,1,2,3,4],
          [0,1,2,3,4],
          [0,1,2,3,4],
          [0,1,2,3,4],
          [0,1,2,3,4],
        ],
        deleteData:[],
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
      this.params.deleteData=checkedIndexs
    },
    signUpClient(){
        //there will be a method here to establish connection with backend and sign up the articles' id and name, some day....
        this.aCompania='';
        this.aCliente='';
        this.aNombreA='';
        this.aNombreB='';
        this.aEstatus='';
    },
    signDownClient(){
        //there will be a method here to establish connection with backend and sign down the articles' id and name, some day....
        this.aCompania='';
        this.aCliente='';
        this.aNombreA='';
        this.aNombreB='';
        this.aEstatus='';
        for (var i = this.params.deleteData.length-1; i>0 ; i--) {
          this.params.data.splice(this.params.deleteData[i], 1)
        }
    },
    loadClient(){
        //there will be a method here to establish connection with backend and update the table, some day....
        this.aCompania='';
        this.aCliente='';
        this.aNombreA='';
        this.aNombreB='';
        this.aEstatus='';
    },
    generateReport(){
      //aqui se mandara a llamar la pagina de reportes
    }
  },
  components: { VueTableDynamic }
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
