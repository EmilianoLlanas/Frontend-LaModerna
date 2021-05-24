<template>
    <div id="test">
    <h1 id="header1"> Buscar artículo por cliente </h1>
    <div class="inputForm">
      <label>Cliente</label>
    </div>
   <div id="table">
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
  name: 'SearchArticlesperClient',
  data() {
    return {
      searchClient:'',
      params: {
        data: [
          ['Orden','Orden Baan','Cliente', 'Nombre', 'Fecha de orden', 'Fecha de entrega','Fecha definida', 'Status suaje', 'Status grabado', 'Status ING', 'Articulo', 'Unidad', 'Notas'],
          ['1','135','0303', 'BIMBO', '2021-03-21', '2021-04-21','2021-04-22', true, 'Status grabado', 'Status ING', 'PAPELITO-SUAVE-500', '1000', 'Requiere solicitud adicional de tinta'],
          ['2','435','0403', 'BARCEL', '2021-06-21', '2021-08-21','2021-08-20', false, 'Status grabado', 'Status ING','CAJITA-400', '3000', ''],
        ],
        deleteDate:[],
        header: 'row',
        border: true,
        stripe: true,
        showCheck: true,
        enableSearch: true,
        sort: [0,1],
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
      this.params.deleteDate=checkedIndexs
    },
    signUpWare(){
        if(this.wareCom==''||this.wareUbi=='')
        {
          alert('Por favor, llene todos los campos para registrar el almacen')
        }
        else
        {
          this.params.data.push([this.wareCom, this.wareUbi]);
        }
    },
    signDownWare(){
        this.wareCom='';
        this.wareUbi='';
        console.log(this.params.deleteData.length)
        for (var i = this.params.deleteData.length-1; i>0 ; i--) {
        this.params.data.splice(this.params.deleteData[i], 1)
      }
    },
    loadWare(){
        this.wareCom='';
        this.wareUbi='';
        alert("Actualizando informacion...");
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
  width: 90%;
  margin-left: 5%;
  margin-top: 2%;
}
</style>
