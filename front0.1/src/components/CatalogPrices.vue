<template>
    <div>
    <h1> Catálogo de Precios </h1>
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
      <br>
      <br>
   </form>
  </div>
   <br>
   <button @click="signUpPrice"> Dar de alta </button>
   <button @click="signDownPrice"> Dar de baja </button>
   <button @click="loadPrices">Actualizar </button>
   <button @click="generateReport">Reporte </button>
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
          ['ejemplo0','lista0','123','0%','100','12.3','1%','Descripcion 0','12/12/20','12/12/21'],
          ['ejemplo1','lista0','123','0%','111','13.3','2%','Descripcion 1','12/11/20','12/11/21'],
          ['ejemplo2','lista1','124','2%','123','32.3','1%','Descripcion 2','12/12/20','12/12/21']
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
    signUpPrice(){
        //there will be a method here to establish connection with backend and sign up the articles' id and name, some day....
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
