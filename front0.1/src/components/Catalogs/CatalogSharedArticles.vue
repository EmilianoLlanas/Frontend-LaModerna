<template>
  <div id="fullpage">
      <NavBar></NavBar>
  <div id="content">

    <h1 id="header1"> Catálogo de Artículos Compartidos </h1>

    <div id="card">

      <div id="cardheader"></div>

      <div id="table">
        <vue-table-dynamic :params="params"
          @select="onSelect"
          @selection-change="onSelectionChange"
          ref="table">
        </vue-table-dynamic>
        <br>
      </div>

      <div id="buttons">
        <button @click="signDownArticle"> Dar de baja </button>
        <button @click="loadArticles"> Actualizar </button>
      </div>

    </div>
  </div>
</div>
</template>

<script>
import VueTableDynamic from 'vue-table-dynamic';
import NavBar from '@/components/NavBar.vue';
export default {
  name: 'CatalogSharedArticles',
  data() {
    return {
      aId:'',
      aName:'',
      aDescription:'',
      errors:[],
      params: {
        data: [
          ['Compañía Origen', 'Cliente Origen', 'Artículo', 'Compañía Destino','Cliente Destino'],
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
    signDownArticle(){
        //there will be a method here to establish connection with backend and sign down the articles' id and name, some day....
        this.aId='';
        this.aName='';
        this.aDescription='';

        for (var i = this.params.deleteData.length-1; i>0 ; i--) {
          this.params.data.splice(this.params.deleteData[i], 1)
        }
    },
    loadArticles(){
        //there will be a method here to establish connection with backend and update the table, some day....
        this.aId='';
        this.aName='';
        this.aDescription='';
        alert('Actualizando tabla con Base de datos')
    }
  },
  components: { VueTableDynamic, NavBar}
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

.inputForm textarea{
  padding: 10px;
  width: 150%;
  height: 90px;
  color: #213485;
  margin-top: 2%;
  margin-bottom: 0%;
  font-family: "GOTY0", "GOTY1", "GOTY2", verdana;
  opacity: 50%;
  border-radius: 6px;
  border: transparent;
  background: #f2f2f2;
  width: 100%;
  font-family: Verdana;
  font-size: 20px;
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
  color: #FFFF;
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

#error{
  color: red;
}

#fullpage{
  display: flex;
}

#content{
  width: 100%;
  height: 100%;
  background-image: url('~@/components/fondito.jpg');
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: 100% 100%;
}
</style>
