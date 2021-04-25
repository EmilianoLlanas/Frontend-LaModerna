<template>
    <div>
    <h1> Catálogo de Facturas </h1>
    <div class="inputForm">
    <form>
      <label>Fecha</label>
      <br>
      <input v-model="facDate" placeholder="Fecha">
      <br>
      <label>NumeroFactura</label>
      <br>
      <input v-model="facId" placeholder="Numero de Factura">
      <br>
      <label>Cliente</label>
      <br>
      <input v-model="facCli" placeholder="Cliente">
      <br>
      <label>Orden</label>
      <br>
      <input v-model="facOrd" placeholder="Numero de Orden">
      <br>
      <label>Entrega</label>
      <br>
      <input v-model="facEst" placeholder="Estatus de entrega">
   </form>
  </div>
   <br>
   <button @click="signUpFactura"> Dar de alta </button>
   <button @click="signDownFactura"> Dar de baja </button>
   <button @click="loadFactura">Actualizar </button>
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
  name: 'CatalogFacturas',
  data() {
    return {
      facDate:'',
      facId:'',
      facDate:'',
      facOrd:'',
      facEst:'',
      params: {
        data: [
          ['Fecha', 'NumeroFactura', 'Cliente','Orden','Entrega'],
          ['12/05/18', '4888', 'Zara', '7777', 'ok'],
          ['31/12/20', '4486', 'Barcel', '9021', 'ok'],
          ['10/01/21', '6548', 'Totis', '2312', 'ok'],
        ],
        header: 'row',
        border: true,
        stripe: true,
        showCheck: true,
        enableSearch: true,
        sort: [0, 1, 2, 3, 4],
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
    signUpFactura(){
        //there will be a method here to establish connection with backend and sign up the deliveries' company and ldate, some day....
        this.facDate='';
        this.facId='';
        this.facDate='';
        this.facOrd='';
        this.facEst='';
    },
    signDownFactura(){
        //there will be a method here to establish connection with backend and sign down the deliveries' company and date, some day....
        this.facDate='';
        this.facId='';
        this.facDate='';
        this.facOrd='';
        this.facEst='';
    },
    loadFactura(){
        //there will be a method here to establish connection with backend and update the table, some day....
        this.facDate='';
        this.facId='';
        this.facDate='';
        this.facOrd='';
        this.facEst='';
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
