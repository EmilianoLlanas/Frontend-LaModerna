<template>
    <div>
    <h1> Catálogo de Almacenes </h1>
    <div class="inputForm">
    <form>
      <label>Compañia</label>
      <br>
      <input v-model="wareCom" placeholder="Compañia">
      <br>
      <label>Ubicacion</label>
      <br>
      <input v-model="wareUbi" placeholder="Ubicación del almacen">
   </form>
  </div>
   <br>
   <button @click="signUpWare"> Dar de alta </button>
   <button @click="signDownWare"> Dar de baja </button>
   <button @click="loadWare">Actualizar </button>
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
  name: 'CatalogWarehouse',
  data() {
    return {
      wareCom:'',
      wareUbi:'',
      params: {
        data: [
          ['Compañia', 'Ubicacion'],
          ['Zara', '1024 norte'],
          ['Barcel', '244 sur'],
          ['Totis', '930 este'],
        ],
        header: 'row',
        border: true,
        stripe: true,
        showCheck: true,
        enableSearch: true,
        sort: [0, 1],
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
    signUpWarehouse(){
        //there will be a method here to establish connection with backend and sign up the warehouses' company and location, some day....
        this.wareCom='';
        this.wareUbi='';
    },
    signDownWarehouse(){
        //there will be a method here to establish connection with backend and sign down the warehouses' company and location, some day....
        this.wareCom='';
        this.wareUbi='';
    },
    loadWarehouse(){
        //there will be a method here to establish connection with backend and update the table, some day....
        this.wareCom='';
        this.wareUbi='';
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
