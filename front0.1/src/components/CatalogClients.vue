<template>
    <div>
    <h1> Catálogo de Clientes </h1>
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
      <br>
      <br>
   </form>
  </div>
   <br>
   <button @click="signUpClient"> Dar de alta </button>
   <button @click="signDownClient"> Dar de baja </button>
   <button @click="loadClient">Actualizar </button>
   <button @click="generateReport">Reportes </button>
   <div style="width: 80%" >
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

  width: 300px;
  clear: both;
}

.inputForm  input {
  width: 100%;
  clear: both;
}

.inputForm  textarea {
  width: 100% ;
  height: 100px;
}
</style>
