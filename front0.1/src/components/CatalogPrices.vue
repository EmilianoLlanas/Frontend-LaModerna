<template>
    <div id="test">
    <h1 id="header1"> Catálogo de Precios </h1>
    <div class="inputForm">
    <form>
      <label>Compañia</label>
      <br>
      <input v-model="aCompania" placeholder="Compañia">
      <br>
      <label>lista de Precios</label>
      <br>
      <input v-model="aLista" placeholder="Lista de precios">
      <br>
      <label>Articulo</label>
      <br>
      <input v-model="aArticulo" placeholder="Articulo">
      <br>
      <label>Nivel de Descuento</label>
      <br>
      <input v-model="aNivDescuento" placeholder="0%">
      <label>Cantidad</label>
      <br>
      <input v-model="aCantidad" placeholder="Cantidad">
      <br>
      <label>Precio</label>
      <br>
      <input v-model="aPrecio" placeholder="Precio">
      <br>
      <label>Descuento</label>
      <br>
      <input v-model="aDescuento" placeholder="0%">
      <br>
      <label>Descripcion</label>
      <br>
      <input v-model="aDescripcion" placeholder="Descripcion del producto">
      <br>
      <label>Fecha de inicio</label>
      <br>
      <input v-model="aFechaInicio" placeholder="dd/mm/aa">
      <br>
      <label>Fecha de caducidad</label>
      <br>
      <input v-model="aFechaCaducidad" placeholder="dd/mm/aa">
   </form>
  </div>
   <button @click="signUpPrice"> Dar de alta </button>
   <button @click="signDownPrice"> Dar de baja </button>
   <button @click="loadPrices">Actualizar </button>
   <button @click="generateReport">Reportes </button>
   <div id="table" >
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
  name: 'CatalogPrices',
  data() {
    return {
      aCompania:'',
      aLista:'',
      aArticulo:'',
      aNivDescuento:'',
      aCantidad:'',
      aPrecio:'',
      aDescuento:'',
      aDescripcion:'',
      aFechaInicio:'',
      aFechaCaducidad:'',
      params: {
        data: [
          ['Compañia','Lista de precios','Articulo','Nivel de Descuento','Cantidad','Precio','Descuento','Descripción','Fecha de inicio','Fecha de caducidad'],
          ['ejemplo0','lista0','123','0','100','12.3','1','Descripcion 0','12/12/20','12/12/21'],
          ['ejemplo1','lista0','123','0','111','13.3','2','Descripcion 1','12/11/20','12/11/21'],
          ['ejemplo2','lista1','124','2','123','32.3','1','Descripcion 2','12/12/20','12/12/21'],
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
    signUpPrice(){
        //there will be a method here to establish connection with backend and sign up the articles' id and name, some day....
        if(this.aCompania=='' || this.aLista=='' || this.aArticulo=='' || this.aNivDescuento=='' || this.aCantidad=='' || this.aPrecio=='' || this.aDescuento=='' || this.aDescripcion=='' || this.aFechaInicio=='' || this.aFechaCaducidad=='' ){
          alert('Por favor, llene todos los campos para registrar un Precio')
        }else{
          this.params.data.push([this.aCompania,this.aLista,this.aArticulo,this.aNivDescuento,this.aCantidad,this.aPrecio,this.aDescuento,this.aDescripcion,this.aFechaInicio,this.aFechaCaducidad]);
        }

        this.aCompania='';
        this.aLista='';
        this.aArticulo='';
        this.aNivDescuento='';
        this.aCantidad='';
        this.aPrecio='';
        this.aDescuento='';
        this.aDescripcion='';
        this.aFechaInicio='';
        this.aFechaCaducidad='';
    },
    signDownPrice(){
        //there will be a method here to establish connection with backend and sign down the articles' id and name, some day....
        this.aCompania='';
        this.aLista='';
        this.aArticulo='';
        this.aNivDescuento='';
        this.aCantidad='';
        this.aPrecio='';
        this.aDescuento='';
        this.aDescripcion='';
        this.aFechaInicio='';
        this.aFechaCaducidad='';
        for (var i = this.params.deleteData.length-1; i>0 ; i--) {
          this.params.data.splice(this.params.deleteData[i], 1)
        }
    },
    loadPrices(){
        //there will be a method here to establish connection with backend and update the table, some day....
        this.aCompania='';
        this.aLista='';
        this.aArticulo='';
        this.aNivDescuento='';
        this.aCantidad='';
        this.aPrecio='';
        this.aDescuento='';
        this.aDescripcion='';
        this.aFechaInicio='';
        this.aFechaCaducidad='';
        alert('Actualizando tabla con Base de datos')
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
