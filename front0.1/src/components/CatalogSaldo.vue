<template>
    <div>
    <h1> Catálogo de Saldos </h1>
    <div class="inputForm">
    <form>
      <label>Orden</label>
      <br>
      <input v-model="ordId" placeholder="Orden">
      <br>
      <label>Cliente</label>
      <br>
      <input v-model="salCli" placeholder="Cliente">
      <br>
      <label>NumeroFactura</label>
      <br>
      <input v-model="salIdFac" placeholder="NumeroFactura">
      <br>
      <label>SaldoOrden</label>
      <br>
      <input v-model="salOrd" placeholder="SaldoOrden">
      <br>
      <label>SaldoFactura</label>
      <br>
      <input v-model="salFac" placeholder="SaldoFactura">
   </form>
  </div>
   <br>
   <button @click="signUpSaldo"> Dar de alta </button>
   <button @click="signDownSaldo"> Dar de baja </button>
   <button @click="loadSaldo">Actualizar </button>
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
  name: 'CatalogSaldo',
  data() {
    return {
      ordId:'',
      salCli:'',
      salIdFac:'',
      salOrd:'',
      salFac:'',
      params: {
        data: [
          ['Orden', 'Cliente', 'NumeroFactura','SaldoOrden','SaldoFactura'],
          ['1024', 'Zara', '7', '7777', '7000'],
          ['2410', 'Barcel', '45', '4500', '2500'],
          ['5342', 'Totis', '88', '6400', '500'],
        ],
        deleteData:[],
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
    signUpSaldo(){
        if(this.ordId==''||this.salCli==''||this.salIdFac==''||this.salOrd==''||this.salFac=='')
        {
          alert('Por favor, llene todos los campos para registrar el saldo');
        }
        else
        {
          this.params.data.push([this.ordId, this.salCli,this.salIdFac,this.salOrd,this.salFac]);
        }
    },
    signDownSaldo(){
      this.ordId='';
      this.salCli='';
      this.salIdFac='';
      this.salOrd='';
      this.salFac='';
      console.log(this.params.deleteData.length)
      for (var i = this.params.deleteData.length-1; i>0 ; i--) {
      this.params.data.splice(this.params.deleteData[i], 1)
      }
    },
    loadSaldo(){
      this.ordId='';
      this.salCli='';
      this.salIdFac='';
      this.salOrd='';
      this.salFac='';
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