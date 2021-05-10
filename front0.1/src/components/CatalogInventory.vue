<template>
    <div>
    <h1> Catálogo de Inventarios </h1>
    <div class="inputForm">
    <form>
      <label>Compañia</label>
      <br>
      <input v-model="invCom" placeholder="Compañía"> 
      <input v-model="invWarehouse" placeholder="Almacén">
      <input v-model="invArticle" placeholder="Artículo">
      <input v-model="invStock" placeholder="Stock">
   </form>
  </div>
   <br>
   <button @click="signUpInv"> Agregar </button>
   <button @click="signDownInv"> Eliminar </button>
   <button @click="loadInv">Actualizar </button>
   <button @click="reportInv">Generar reporte </button>
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
  name: 'CatalogInventory',
  data() {
    return {
      invCom:'',
      invWarehouse:'',
      invArticle:'',
      invStock:'',
      params: {
        data: [
          ['Compañía', 'Almacén', 'Artículo', 'Stock'],
          ['Plásticos de México', 'Blvd. Solidaridad las Torres S/N, San Salvador Tizatlali, 52172 Metepec, Méx.' ,'200109 CORR. MARQUETA 5KG', '4320.0'],
          ['Barcel', 'Avenida Eduardo Monroy Cárdenas 2000 San Antonio Buenavista, 50110 Toluca de Lerdo, Méx.' ,'200167 CORR. UNIVERSAL GRANEL ', '40.0'],
          ['Totis', 'Delegación San Buenaventura, 50110 Toluca de Lerdo, Méx.' ,'LAMINA CARTON CH-1 ', '2000.0' ],
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

    signUpInv(){
        //there will be a method here to establish connection with backend and sign up the address' data, some day....
        if(this.invCom==''||this.invWarehouse==''||this.invArticle==''||this.invStock=='')
        {
          alert('Por favor, llene todos los campos para registrar inventario')
        }
        else
        {
          this.params.data.push([this.invCom, this.invWarehouse, this.invArticle, this.invStock]);
        }
    },

    signDownInv(){
        //there will be a method here to establish connection with backend and sign down the address' data, some day....
        if(this.invCom==''||this.invArticle==''||this.invWarehouse=='')
        {
          alert('Por favor, llene los campos Compañía, Artículo y Almacén para eliminar un artículo '+
          this.invArticle+' '+this.invCom+' '+this.invWarehouse)
        }
        else{
          alert('Eliminando artículo'+this.invArticle+' de '+this.invCom+', almacén'+this.invWarehouse);
        }
        
    },
    loadInv(){
        //there will be a method here to establish connection with backend and update the table, some day....
        alert('Cargando catálogo, espere un momento por favor')
    },
    reportInv(){
        //there will be a method here to establish connection with backend and update the table, some day....
        alert('Generando reporte, espere un momento por favor')
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
