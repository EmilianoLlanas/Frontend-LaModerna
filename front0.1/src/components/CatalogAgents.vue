<template>
    <div>
    <h1> Catálogo de Agentes </h1>
    <div class="inputForm">
    <form>
      <label>Compañia</label>
      <br>
      <input v-model="agCom" placeholder="Compañia">
      <br>
      <label>ID</label>
      <br>
      <input v-model="agId" placeholder="Identificador del agente">
      <br>
      <label>Representante</label>
      <br>
      <input v-model="rep" placeholder="Representante del agente">
      <br>
      <label>Estauts</label>
      <br>
      <input v-model="agEst" placeholder="Estatus del agente">
   </form>
  </div>
   <br>
   <button @click="signUpAgent"> Dar de alta </button>
   <button @click="signDownAgent"> Dar de baja </button>
   <button @click="loadAgent">Actualizar </button>
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
  name: 'CatalogAgents',
  data() {
    return {
      agCom:'',
      agId:'',
      rep:'',
      agEst:'',
      params: {
        data: [
          ['Compañia', 'idAgente', 'Representante','Estatus'],
          ['Zara', '808', 'Sergio', 'Activo'],
          ['Barcel', '626', 'Sara', 'Activo'],
          ['Totis', '250', 'Selena', 'Inactivo'],
        ],
        header: 'row',
        border: true,
        stripe: true,
        showCheck: true,
        enableSearch: true,
        sort: [0, 1,2,3],
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
    signUpAgent(){
        //there will be a method here to establish connection with backend and sign up the agents' id and name, some day....
        this.agCom='';
        this.agId='';
        this.rep='';
        this.agEst='';
    },
    signDownAgent(){
        //there will be a method here to establish connection with backend and sign down the agents' id and name, some day....
        this.agCom='';
        this.agId='';
        this.rep='';
        this.agEst='';
    },
    loadAgent(){
        //there will be a method here to establish connection with backend and update the table, some day....
        this.agCom='';
        this.agId='';
        this.rep='';
        this.agEst='';
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
