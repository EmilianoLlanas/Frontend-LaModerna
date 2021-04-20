<template>
    <div>
    <h1> Catálogo de Precios </h1>
    <div class="inputForm">
    <form>
      <label>ID</label>
      <br>
      <input v-model="aId" placeholder="Identificador del artículo">
      <br>
      <label>Nombre</label>
      <br>
      <input v-model="aName" placeholder="Nombre del artículo">
      <br>
      <label>Descripción</label>
      <br>
      <textarea v-model="aDescription" placeholder="Descripción del artículo"></textarea>
   </form>
  </div>
   <br>
   <button @click="signUpArticle"> Dar de alta </button>
   <button @click="signDownArticle"> Dar de baja </button>
   <button @click="loadArticles">Actualizar </button>
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
          ['ID', 'Nombre','Descripción'],
          [1, 'b3ba90', 'aab418'],
          [2, 'ec0b78', 'ba045d'],
          [3, 'a8c325', 'aab418'],
          [4, 'a8c325', 'aab418'],
          [5, 'a8c325', 'aab418'],

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
    signUpArticle(){
        //there will be a method here to establish connection with backend and sign up the articles' id and name, some day....
        this.aId='';
        this.aName='';
        this.aDescription='';
    },
    signDownArticle(){
        //there will be a method here to establish connection with backend and sign down the articles' id and name, some day....
        this.aId='';
        this.aName='';
        this.aDescription='';
    },
    loadArticles(){
        //there will be a method here to establish connection with backend and update the table, some day....
        this.aId='';
        this.aName='';
        this.aDescription='';
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
