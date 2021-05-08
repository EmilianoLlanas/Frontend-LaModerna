<template>
  <div id="test">
    <h1 id="header1"> Catálogo de Artículos Compartidos </h1>
    <div class="inputForm">
      <form>
        <label>Compañía Origen</label>
        <br>
        <input v-model="aCompOrig" placeholder="Identificador de la compañía">
        <br>
        <label>Cliente Origen</label>
        <br>
        <input v-model="aClieOrig" placeholder="Nombre del cliente">
        <br>
        <label>Artículo</label>
        <br>
        <input v-model="aArticulo" placeholder="Identificador de la compañía">
        <br>
        <label>Compañia Destino</label>
        <br>
        <input v-model="aCompDest" placeholder="Nombre de la compañia">
        <br>
        <label>Cliente Destino</label>
        <br>
        <input v-model="aClieDest" placeholder="Nombre del cliente">


    </form>
  </div>
   <br>
   <button @click="sendData"> Enviar Datos </button>

  <div id="table">
    <vue-table-dynamic :params="params"
      @select="onSelect"
      @selection-change="onSelectionChange"
      ref="table">
    </vue-table-dynamic>
  </div>
  </div>
</template>

<script>
import VueTableDynamic from 'vue-table-dynamic'
export default {
  name: 'CatalogSharedArticles',
  data() {
    return {
      aCompOrig:'',
      aClieOrig:'',
      aArticulo:'',
      aCompDest:'',
      aClieDest:'',
      params: {
        data: [
          ['Compañia Origen', 'Cliente Origen','Artículo','Compañia Destino','Cliente Destino'],
          [1, 'b3ba90', 'aab418', 101, 'aab418'],
          [2, 'ec0b78', 'ba045d', 102, 'cab415'],
          [3, 'a8c325', 'aab418', 103, 'dab417'],
          [4, 'a8c325', 'aab418', 104, 'lab316'],
          [5, 'a8c325', 'aab418', 105, 'dgb115'],

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
    sendData(){
        //there will be a method here to establish connection with backend and sign up the articles' id and name, some day....

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
