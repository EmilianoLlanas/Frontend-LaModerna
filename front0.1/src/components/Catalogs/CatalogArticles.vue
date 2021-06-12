<template>

  <div id="content">

    <h1 id="header1"> Catálogo de Artículos </h1>

    <div id="card">

      <div id="cardheader"></div>

      <div class="inputForm">

        <div id="error">
          <ul>
            <li v-for="error in errors" v-bind:key="error">{{error}}</li>
          </ul>
        </div>

        <form>
          <label>ID</label>
          <br>
          <input v-model="aId" placeholder="Identificador del artículo">
          <br>
          <label>Nombre</label>
          <br>
          <input v-model="aName" placeholder="Nombre del artículo">
          <br>
          <label>Descripción</label>
          <br>
          <textarea v-model="aDescription" placeholder="Descripción del artículo"></textarea>
        </form>
      </div>

      <div id="buttons">
        <button @click="signUpArticle"> Dar de alta </button>
        <button @click="signDownArticle"> Dar de baja </button>
        <button @click="loadArticles"> Actualizar </button>
      </div>

      <div id="table">
        <vue-table-dynamic :params="params"
          @select="onSelect"
          @selection-change="onSelectionChange"
          ref="table">
        </vue-table-dynamic>
        <br>
      </div>

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
      errors:[],
      params: {
        data: [
          ['ID', 'Nombre','Descripción'],
          [1, 'b3ba90', 'aab418'],
          [2, 'ec0b78', 'ba045d'],
          [3, 'a8c325', 'aab418'],
          [4, 'a8c325', 'aab418'],
          [5, 'a8c325', 'aab418'],

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
    checkForm(){
        this.errors=[];
        if(this.aId && this.aName && this.aDescription){
          this.signUpArticle();
        }
        else{
          alert("Por favor, llene todos los campos correctamente para agregar un registro");
           if(!this.aId)
          {
            this.errors.push('Introduce un ID de artículo');
          }
          if(!this.aName)
          {
            this.errors.push('Introduce el nombre del artículo');
          }
          if(!this.aDescription)
          {
            this.errors.push('Introduce la descripción del artículo');
          }
        }
    },
    signUpArticle(){
        //there will be a method here to establish connection with backend and sign up the articles' id and name, some day....
        if(this.aId==''||this.aName==''||this.aDescription=='')
        {
          alert('Por favor, llene todos los campos para registrar inventario')
        }
        else
        {
          this.params.data.push([this.aId, this.aName,this.aDescription]);
        }
        this.aId='';
        this.aName='';
        this.aDescription='';
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
</style>
