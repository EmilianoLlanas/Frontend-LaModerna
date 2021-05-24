<template>

  <div id="content">

    <h1 id="header1"> Catálogo de Facturas </h1>

    <div id="card">

      <div id="cardheader"></div>

      <div class="inputForm">

        <div id="error">
          <ul>
            <li v-for="error in errors" v-bind:key="error">{{error}}</li>
          </ul>
        </div>

        <form>
          <label>Fecha</label>
          <br>
          <datepicker placeholder="Fecha" v-model="facDate" :format="customFormatter"></datepicker>
          <br>
          <label>Numero Factura</label>
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
          <input v-model="facEst" placeholder="Estatus de Entrega">
        </form>

      </div>

      <div id="buttons">
        <button @click="checkForm"> Dar de alta </button>
        <button @click="signDownFactura"> Dar de baja </button>
        <button @click="loadFactura"> Actualizar </button>
      </div>

      <div id="table">
        <vue-table-dynamic :params="params"
          @select="onSelect"
          @selection-change="onSelectionChange"
          ref="table">
        </vue-table-dynamic>
      </div>

    </div>
  </div>
</template>

<script>
import VueTableDynamic from 'vue-table-dynamic'
import Datepicker from 'vuejs-datepicker'
import moment from 'moment'

export default {
  name: 'CatalogFacturas',
  data() {
    return {
      facDate:'',
      facId:'',
      facCli:'',
      facOrd:'',
      facEst:'',
      errors:[],
      params: {
        data: [
          ['Fecha', 'NumeroFactura', 'Cliente','Orden','Entrega'],
          ['12/05/18', '4888', 'Zara', '7777', 'ok'],
          ['31/12/20', '4486', 'Barcel', '9021', 'ok'],
          ['10/01/21', '6548', 'Totis', '2312', 'ok'],
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
    checkForm(){
      this.errors=[];
      if(this.facDate && this.facId && this.facCli && this.facOrd && this.facEst){
        this.signUpFactura();
      }
      else{
        alert('Por favor, llene todos los campos para registrar la Factura');
        if(!this.facDate)
        {
          this.errors.push('Introduce una fecha');
        }
        if(!this.facId)
        {
          this.errors.push('Introduce un numero de factura');
        }
        if(!this.facCli)
        {
          this.errors.push('Introduce un nombre de cliente');
        }
        if(!this.facOrd)
        {
          this.errors.push('Introduce un numero de orden');
        }
        if(!this.facEst)
        {
          this.errors.push('Introduce un estatus de entrega');
        }
      }
    },
    signUpFactura(){
      if(this.facDate==''||this.facId==''||this.facCli==''||this.facOrd==''||this.facEst=='')
      {
        alert('Por favor, llene todos los campos para registrar la Factura')
      }
      else
      {
        this.params.data.push([this.customFormatter(this.facDate), this.facId, this.facCli,this.facOrd,this.facEst]);
      }
      this.facDate='';
      this.facId='';
      this.facDate='';
      this.facOrd='';
      this.facEst='';
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
    },
    customFormatter(date) {
      return moment(date).format('YYYY/MM/DD');
    }
  },
  components: { VueTableDynamic,Datepicker }
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

#error{
  color: red;
}
</style>