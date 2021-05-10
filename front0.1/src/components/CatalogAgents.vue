
<template>
    <div id="test">
    <h1 id="header1"> Catálogo de Agentes </h1>
    <div class="inputForm">
    <form>
      <label>Compañia</label>
      <br>
      <input v-model="agCom" placeholder="Compañia">
      <br>
      <label>ID</label>
      <br>
      <input v-model="agId" placeholder="Identificador del agente">
      <br>
      <label>Representante</label>
      <br>
      <input v-model="rep" placeholder="Representante del agente">
      <br>
      <label>Estauts</label>
      <br>
      <input v-model="agEst" placeholder="Estatus del agente">
   </form>
  </div>
   <button @click="signUpAgent"> Dar de alta </button>
   <button @click="signDownAgent"> Dar de baja </button>
   <button @click="loadAgent">Actualizar </button>
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
  name: 'CatalogAgents',
  data() {
    return {
      agCom:'',
      agId:'',
      rep:'',
      agEst:'',
      params: {
        data: [
          ['Compañia', 'idAgente', 'Representante','Estatus'],
          ['Zara', '808', 'Sergio', 'Activo'],
          ['Barcel', '626', 'Sara', 'Activo'],
          ['Totis', '250', 'Selena', 'Inactivo'],
        ],
        header: 'row',
        border: true,
        stripe: true,
        showCheck: true,
        enableSearch: true,
        sort: [0, 1,2,3],
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
    signUpAgent(){
        //there will be a method here to establish connection with backend and sign up the agents' id and name, some day....
        this.agCom='';
        this.agId='';
        this.rep='';
        this.agEst='';
    },
    signDownAgent(){
        //there will be a method here to establish connection with backend and sign down the agents' id and name, some day....
        this.agCom='';
        this.agId='';
        this.rep='';
        this.agEst='';
    },
    loadAgent(){
        //there will be a method here to establish connection with backend and update the table, some day....
        this.agCom='';
        this.agId='';
        this.rep='';
        this.agEst='';
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
  width: 80%;
  margin-left: 10%;
  margin-top: 2%;
}
</style>
=======
<template>
    <div>
    <h1> Catálogo de Agentes </h1>
    <div class="inputForm">
    <form>
      <label>Compañia</label>
      <br>
      <input v-model="agCom" placeholder="Compañia">
      <br>
      <label>ID</label>
      <br>
      <input v-model="agId" placeholder="Identificador del agente">
      <br>
      <label>Representante</label>
      <br>
      <input v-model="rep" placeholder="Representante del agente">
      <br>
      <label>Estauts</label>
      <br>
      <input v-model="agEst" placeholder="Estatus del agente">
   </form>
  </div>
   <br>
   <button @click="signUpAgent"> Dar de alta </button>
   <button @click="signDownAgent"> Dar de baja </button>
   <button @click="loadAgent">Actualizar </button>
   <button @click="reportAgent">Generar Reporte</button>
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
  name: 'CatalogAgents',
  data() {
    return {
      agCom:'',
      agId:'',
      rep:'',
      agEst:'',
      params: {
        data: [
          ['Compañia', 'idAgente', 'Representante','Estatus'],
          ['Zara', '808', 'Sergio', 'Activo'],
          ['Barcel', '626', 'Sara', 'Activo'],
          ['Totis', '250', 'Selena', 'Inactivo'],
        ],
        header: 'row',
        border: true,
        stripe: true,
        showCheck: true,
        enableSearch: true,
        sort: [0,1,2,3],
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
    signUpAgent(){
        if(this.agCom==''||this.agId==''||this.rep==''||this.agEst=='')
        {
          alert('Por favor, llene todos los campos para registrar al agente')
        }
        else
        {
          this.params.data.push([this.agCom, this.agId, this.rep, this.agEst]);
        }
    },
    signDownAgent(){
        if(this.agCom==''||this.agId==''||this.rep==''||this.agEst=='')
        {
          alert('Por favor, llene todos los campos para eliminar un agente ');
        }
        else{
          alert('Eliminando agente'+this.agId);
        }
    },
    loadAgent(){
        this.agCom='';
        this.agId='';
        this.rep='';
        this.agEst='';
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
