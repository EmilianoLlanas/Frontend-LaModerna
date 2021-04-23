<template>
    <div>
    <h1> Órdenes de venta en proceso </h1>

   <button @click="loadOrders">Actualizar </button>
   <button @click="orderReport"> Reporte de órdenes </button>
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
  name: 'OrdersInProcess',
  data() {

    return {
      params: {
        data: [
          ['ID', 'Nombre','Descripción'],
          [1, 'b3ba90', 'aab418'],
          [2, 'ec0b78', 'ba045d'],
          [3, 'a8c325', 'aab418'],
          [4, 'a8c325', 'aab418'],
          [5, 'a8c325', 'aab418'],
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
    orderReport(){
        //there will be a method here to establish connection with backend and sign up the articles' id and name, some day....
    },
    loadOrders(){
        //there will be a method here to establish connection with backend and update the table, some day....
    }
  },
  components: { VueTableDynamic }
}
</script>

<style scoped>
</style>
