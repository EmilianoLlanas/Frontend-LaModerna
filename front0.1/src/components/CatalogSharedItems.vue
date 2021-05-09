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
   <button @click="sendItem"> Agregar Artículo </button>
   <button @click="sendData"> Enviar Artículos</button>

  <div id="table">
    <table class="table mt-5">
    <tr>
      <th scope="col">#</th>
      <th scope="col">Compañía Origen </th>
      <th scope="col">Cliente Origen </th>
      <th scope="col">Artículo </th>
      <th scope="col">Compañía Destino </th>
      <th scope="col">Cliente Destino </th>
    </tr>
    <tbody>
      <tr v-for="(entry, i) in sortedList" :key="i">
        <th scope="row">{{ ++i }}</th>
        <td>{{ entry.aCompOrig}}</td>
        <td>{{ entry.aClieOrig }}</td>
        <td>{{ entry.aArticulo }}</td>
        <td>{{ entry.aCompDest}}</td>
        <td>{{ entry.aClieDest }}</td>
      </tr>
    </tbody>
</table>

  </div>

  </div>
</template>

<script>
import VueTableDynamic from 'vue-table-dynamic'
export default {
  name: 'CatalogSharedItems',
  data:() =>({
      aCompOrig:'',
      aClieOrig:'',
      aArticulo:'',
      aCompDest:'',
      aClieDest:'',
      allArticles:[],
      /*
     params: {
        header: 'row',
        border: true,
        stripe: true,
        showCheck: true,
        enableSearch: true,
        sort: [0, 1,2],
        pagination: true,
        pageSize: 10,
      }*/
    })
  ,
  computed:{
    sortedList: function() {
      return this.allArticles.slice().sort(function(a, b) {
        return b.score - a.score;
      });
    },

  },
  methods: {
    onSelect (isChecked, index, data) {
      console.log('onSelect: ', isChecked, index, data)
      console.log('Checked Data:', this.$refs.table.getCheckedRowDatas(true))
    },
    onSelectionChange (checkedDatas, checkedIndexs, checkedNum) {
      console.log('onSelectionChange: ', checkedDatas, checkedIndexs, checkedNum)
    },
    sendItem(){
      this.allArticles.push({
      aCompOrig:this.aCompOrig,
      aClieOrig:this.aClieOrig,
      aArticulo:this.aArticulo,
      aCompDest:this.aCompDest,
      aClieDest:this.aClieDest});
      this.clearForm();

    },
    clearForm(){
      this.aCompOrig='';
      this.aClieOrig='';
      this.aArticulo='';
      this.aCompDest='';
      this.aClieDest='';
    },
    sendData(){

    }
  },
  components: { VueTableDynamic }
}
</script>

<style scoped>
table {
  table-layout: fixed;
  width: 100%;
  border-collapse: collapse;
  border: 3px solid purple;
}
th, td {
  padding: 8px;
}
tbody td {
  text-align: center;
}

tfoot th {
  text-align: right;
}
tbody tr:nth-child(odd) {
  background-color: #fbd7fc;
}

tbody tr:nth-child(even) {
  background-color: #e495e4;
}
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
