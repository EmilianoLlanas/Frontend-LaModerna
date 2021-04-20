<template>
    <div>
    <h1> Catálogo de Compañías </h1>
    <div class="inputForm">
    <form>
      <label>ID</label>
      <br>
      <input v-model="aId" placeholder="Identificador de la Compañía">
      <br>
      <label>Nombre</label>
      <br>
      <input v-model="aName" placeholder="Nombre de la Compañía">

   </form>
  </div>
   <br>
   <button @click="signUpCompany"> Dar de alta </button>
   <button @click="signDownCompany"> Dar de baja </button>
   <button @click="loadCompanies"> Actualizar </button>
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
  name: 'CatalogArticles',
  data() {
    return {
      aId:'',
      aName:'',
      aDescription:'',
      params: {
        data: [
          ['ID', 'Nombre'],
          [1, 'b3ba90'],
          [2, 'ec0b78'],
          [3, 'a8c325'],
          [4, 'a8c325'],
          [5, 'a8c325']

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
    signUpCompany(){
        //there will be a method here to establish connection with backend and sign up the companies' id and name, some day....
        this.aId='';
        this.aName='';
        this.aDescription='';
    },
    signDownCompany(){
        //there will be a method here to establish connection with backend and sign down the companies' id and name, some day....
        this.aId='';
        this.aName='';
        this.aDescription='';
    },
    loadCompanies(){
        //there will be a method here to establish connection with backend and load the companies' id and name, some day....
        this.aId='';
        this.aName='';
        this.aDescription='';
    },
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
