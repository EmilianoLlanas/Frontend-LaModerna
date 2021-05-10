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
      facCli:'',
      facOrd:'',
      facEst:'',
      params: {
        data: [
          ['Fecha', 'NumeroFactura', 'Cliente','Orden','Entrega'],
          ['12/05/18', '4888', 'Zara', '7777', 'ok'],
          ['31/12/20', '4486', 'Barcel', '9021', 'ok'],
          ['10/01/21', '6548', 'Totis', '2312', 'ok'],
        ],
        deleteDate:[],
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
      this.params.deleteData=checkedIndexs
    },
    signUpFactura(){
      if(this.facDate==''||this.facId==''||this.facCli==''||this.facOrd==''||this.facEst=='')
      {
        alert('Por favor, llene todos los campos para registrar la Factura')
      }
      else
      {
        this.params.data.push([this.facDate, this.facId, this.facCli,this.facOrd,this.facEst]);
      }
    },
    signDownFactura(){
        this.facDate='';
        this.facId='';
        this.facDate='';
        this.facOrd='';
        this.facEst='';
        console.log(this.params.deleteData.length)
        for (var i = this.params.deleteData.length-1; i>0 ; i--) {
        this.params.data.splice(this.params.deleteData[i], 1)
      }
    },
    loadFactura(){
        this.facDate='';
        this.facId='';
        this.facDate='';
        this.facOrd='';
        this.facEst='';
        alert("Actualizando informacion...");
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
