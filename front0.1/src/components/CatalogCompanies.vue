<template>
    <div id="test">
    <h1 id="header1"> Catálogo de Compañías </h1>
    <div class="inputForm">
    <form>
      <label>ID</label>
      <br>
      <input v-model="aId" placeholder="Identificador de la Compañía">
      <br>
      <label>Nombre</label>
      <br>
      <input v-model="aName" placeholder="Nombre de la Compañía">
    </form>
    </div>
   <button @click="signUpCompany"> Dar de alta </button>
   <button @click="signDownCompany"> Dar de baja </button>
   <button @click="loadCompanies"> Actualizar </button>
   <div id="table" >
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
  name: 'CatalogArticles',
  data() {
    return {
      aId:'',
      aName:'',
      aDescription:'',
      params: {
        data: [
          ['ID', 'Nombre'],
          [1, 'b3ba90'],
          [2, 'ec0b78'],
          [3, 'a8c325'],
          [4, 'a8c325'],
          [5, 'a8c325']

        ],
        deleteData:[],
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
      this.params.deleteData=checkedIndexs
    },
    signUpCompany(){
        //there will be a method here to establish connection with backend and sign up the companies' id and name, some day....

        if(this.aId==''||this.aName=='')
        {
          alert('Por favor, llene todos los campos para registrar inventario')
        }
        else
        {
          this.params.data.push([this.aId, this.aName]);
        }
        this.aId='';
        this.aName='';
    },
    signDownCompany(){
        //there will be a method here to establish connection with backend and sign down the companies' id and name, some day....
        this.aId='';
        this.aName='';
        
        for (var i = this.params.deleteData.length-1; i>0 ; i--) {
          this.params.data.splice(this.params.deleteData[i], 1)
        }




    },
    loadCompanies(){
        //there will be a method here to establish connection with backend and load the companies' id and name, some day....
        this.aId='';
        this.aName='';
        alert('Actualizando tabla con Base de datos')
    },
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
  width: 80%;
  margin-left: 10%;
  margin-top: 2%;
}
</style>
