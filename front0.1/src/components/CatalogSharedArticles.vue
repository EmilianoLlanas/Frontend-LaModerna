<template>

  <div id="content">

    <h1 id="header1"> Catálogo de Artículos Compartidos </h1>

    <div id="card">

      <div id="cardheader"></div>

      <div class="inputForm">

        <div id="error">
          <ul>
            <li v-for="error in errors" v-bind:key="error">{{error}}</li>
          </ul>
        </div>

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
          <input v-model="aArticulo" placeholder="Identificador del articulo">
          <br>
          <label>Compañia Destino</label>
          <br>
          <input v-model="aCompDest" placeholder="Identificador de la compañía">
          <br>
          <label>Cliente Destino</label>
          <br>
          <input v-model="aClieDest" placeholder="Nombre del cliente">
        </form>

      </div>

      <br>

      <div id="buttons">
        <button @click="sendItem"> Agregar Artículo </button>
        <button @click="deleteData"> Eliminar Artículos</button>
        <button @click="sendData"> Enviar Artículos</button>
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
import { required,email } from 'vuelidate/lib/validators'
export default {
  name: 'CatalogSharedArticles',
  data(){
    return{
      aCompOrig:'',
      aClieOrig:'',
      aArticulo:'',
      aCompDest:'',
      aClieDest:'',
      errors:[],
      allArticles:[],
      empty:true,
      params: {
      data: [
        ['Compañía Origen', 'Cliente Origen', 'Artículo', 'Compañía Destino','Cliente Destino'],

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
    }
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
      this.params.deleteData=checkedIndexs
    },
    sendItem(){
      this.errors=[];
      if(this.aCompOrig && this.aClieOrig && this.aArticulo && this.aClieDest && this.aCompDest)
      {
        this.signupItem();
      }
      else
      {
        alert("Por favor, llene todos los campos correctamente para agregar un registro");

        if(!this.aCompOrig)
       {
         this.errors.push('Introduce compañia origen');
       }
       if(!this.aClieOrig)
       {
         this.errors.push('Introduce cliente origen');
       }
       if(!this.aArticulo)
       {
         this.errors.push('Introduce el articulo');
       }
       if(!this.aClieDest)
       {
         this.errors.push('Introduce cliente destino');
       }
       if(!this.this.aCompDest)
       {
         this.errors.push('Introduce cliente destino');
       }

      }
  },
  signupItem(){
    this.empty=false;
    console.log(this.params.data.length);
  this.params.data.push([
   this.aCompOrig,
   this.aClieOrig,
   this.aArticulo,
   this.aCompDest,
   this.aClieDest]);
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
      if(this.params.data.length>1)
      {

        console.log('imprime, esto',(this.params.data.length)-1)
        alert('Se han enviado los datos')
      }
      else
      {
        console.log('imprime, esto no',this.params.data.length)
         alert('No hay ningun artículo compartido')
      }

    },
    deleteData(){
      if(this.params.deleteData.length>=1){
        console.log(this.params.deleteData.length)
        for (var i = this.params.deleteData.length-1; i>0 ; i--) {
          this.params.data.splice(this.params.deleteData[i], 1)
        }
      }else{
        alert('No se ha seleccionado nada')
      }

    }
  },
  components: { VueTableDynamic }
}
</script>

<style scoped>
th, td {
  padding: 5px;
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
