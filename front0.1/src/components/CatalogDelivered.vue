<template>
    <div>
    <h1> Catálogo de Entregadas </h1>
    <div class="inputForm">
    <form>
      <label>Orden</label>
      <br>
      <input v-model="delivOrd" placeholder="Número de Orden">
      <br>
      <label>Compañia</label>
      <br>
      <input v-model="delivCom" placeholder="Compañia">
      <br>
      <label>Fecha</label>
      <br>
      <input v-model="delivDate" placeholder="Fecha de entrega">
   </form>
  </div>
   <br>
   <button @click="signUpDeliver"> Dar de alta </button>
   <button @click="signDownDeliver"> Dar de baja </button>
   <button @click="loadDeliver">Actualizar </button>
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
  name: 'CatalogDelivered',
  data() {
    return {
      delivOrd:'',
      delivCom:'',
      delivDate:'',
      params: {
        data: [
          ['Orden', 'Compañia', 'Fecha'],
          ['1024', 'Zara', '12/02/19'],
          ['0235', 'Barcel', '01/10/20'],
          ['0066', 'Totis', '27/08/19'],
        ],
        header: 'row',
        border: true,
        stripe: true,
        showCheck: true,
        enableSearch: true,
        sort: [0, 1, 2],
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
    signUpDeliver(){
        //there will be a method here to establish connection with backend and sign up the deliveries' company and ldate, some day....
        this.delivOrd='';
        this.delivCom='';
        this.delivDate='';
    },
    signDownDeliver(){
        //there will be a method here to establish connection with backend and sign down the deliveries' company and date, some day....
        this.delivOrd='';
        this.delivCom='';
        this.delivDate='';
    },
    loadDeliver(){
        //there will be a method here to establish connection with backend and update the table, some day....
        this.delivOrd='';
        this.delivCom='';
        this.delivDate='';
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
