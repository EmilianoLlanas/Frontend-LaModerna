<template>

  <div id="content">

    <h1 id="header1"> Buscar artículo por cliente </h1>

    <div id="card">

      <div id="cardheader"></div>

        <div class="inputForm">
          <label>Cliente</label>
        </div>

        <div id="table">
          <vue-table-dynamic :params="params"
            @select="onSelect"
            @selection-change="onSelectionChange"
            ref="table">
          </vue-table-dynamic>
        </div>

        <br>

      </div>
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
.inputForm{
  width: 90%;
  clear: both;
  color: #213485;
  margin: 3%;
  font-size: 20px;
  font-family: Verdana;
  font-size: 20px;
}

.inputForm input{
  width: 100%;
  clear: both;
  margin-top: 2%;
  margin-bottom: 5%;
  height: 50px;
  font-size: 20px;
  font-family: "GOTY0", "GOTY1", "GOTY2", verdana;
  opacity: 50%;
  border-radius: 6px;
  border: transparent;
  background: #f2f2f2;
  padding: 10px;
  color: #213485;
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
  font-size: 24px;
  border-radius: 6px;
  border: transparent;
  margin-bottom: 40px;
}

button:hover{
  background-color: rgba(14,44,164,0.30);
}

#header1{
  margin: 2%;
  font-family: Verdana;
  font-size: 60px;
  color: #3B0EA4;
  text-align: center;
}

#table{
  width: 80%;
  margin-left: 10%;
  margin-top: 2%;
}

label{
  font-family: Verdana;
  font-weight: bold;
}

#card{
  background: #fff;
  width: 80%;
  margin: 5em;
  -webkit-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.14);
  -moz-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.14);
  box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.14);
  border-radius: 15px;
}

#cardheader{
  height: 20px;
  width: 100%;
  background: #3B0EA4;
}

#buttons{
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
