<template>
    <div>
    <h1> Captura de ordenes </h1>
    <div class="inputForm">
    <form>
      <label>Cliente</label>
      <br>
      <input v-model="aCliente" placeholder="Cliente">
      <br>
      <label>No de orden</label>
      <br>
      <input v-model="aNoOrden" placeholder="No de cliente">
      <br>
      <label>Fecha de Captura</label>
      <br>
      <input v-model="aFecha" placeholder="dd/mm/aa">
      <br>
      <label>Direccion de entrega</label>
      <br>
      <input v-model="aDireccion" placeholder="Direccion de entrega">
      <br>
   </form>
  </div>
   <br>
   <div style="width: 80%" >
  <vue-table-dynamic :params="params"
      @select="onSelect"
      @selection-change="onSelectionChange"
      ref="table"></vue-table-dynamic>
      <label>Observaciones</label>
      <br>
  </div>
  <textarea v-model="aObservaciones" placeholder="Observaciones de la orden" rows="10" cols="250"></textarea>  
  <br>
  <button @click="save"> Guardar </button>
  <button @click="cancel"> Cancelar </button>
  </div>
</template>

<script>
import VueTableDynamic from 'vue-table-dynamic'
export default {
  name: 'CaptureOrder',
  data() {
    return {
    aCliente:'',
    aNoOrden:'',
    aFecha:'',
    aDireccion:'',
    aObservaciones:'',
      params: {
        data: [
          ['Articulo','Cantidad','Fecha solicitata'],
          ['art','100','dd/mm/aa'],
          ['art','100','dd/mm/aa'],
          ['art','100','dd/mm/aa'],
          ['art','100','dd/mm/aa'],
          ['art','100','dd/mm/aa'],
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
    save(){
      //aqui habra una conexion a backend para guardar la orden
      this.aCliente='';
      this.aNoOrden='';
      this.aFecha='';
      this.aDireccion='';
      this.aObservaciones='';
    },
    cancel(){
      //aqui habra una conexion a backend para cancelar la captura
      this.aCliente='';
      this.aNoOrden='';
      this.aFecha='';
      this.aDireccion='';
      this.aObservaciones='';
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
