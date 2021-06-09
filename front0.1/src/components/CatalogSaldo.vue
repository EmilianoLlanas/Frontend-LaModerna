<template>

  <div id="content">

    <h1 id="header1"> Catálogo de Saldos </h1>

    <div id="card">

      <div id="cardheader"></div>

      <div class="inputForm">

        <div id="error">
          <ul>
            <li v-for="error in errors" v-bind:key="error">{{error}}</li>
          </ul>
        </div>

        <form>
          <label>Orden</label>
          <br>
          <input v-model="ordId" placeholder="Orden">
          <br>
          <label>Cliente</label>
          <br>
          <input v-model="salCli" placeholder="Cliente">
          <br>
          <label>Numero Factura</label>
          <br>
          <input v-model="salIdFac" placeholder="Numero Factura">
          <br>
          <label>Saldo Orden</label>
          <br>
          <input v-model="salOrd" placeholder="Saldo Orden">
          <br>
          <label>Saldo Factura</label>
          <br>
          <input v-model="salFac" placeholder="Saldo Factura">
        </form>

      </div>

      <div id="buttons">
        <button @click="checkForm"> Dar de alta </button>
        <button @click="signDownSaldo"> Dar de baja </button>
        <button @click="loadSaldo"> Actualizar </button>
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
  name: 'CatalogSaldo',
  data() {
    return {
      ordId:'',
      salCli:'',
      salIdFac:'',
      salOrd:'',
      salFac:'',
      errors:[],
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
    checkForm(){
      this.errors=[];
      if(this.ordId && this.salCli && this.salIdFac && this.salOrd && this.salFac){
        this.signUpSaldo();
      }
      else{
        alert('Por favor, llene todos los campos para registrar el saldo');
        if(!this.ordId)
        {
          this.errors.push('Introduce numero de Orden');
        }
        if(!this.salCli)
        {
          this.errors.push('Introduce nombre de Cliente');
        }
        if(!this.salIdFac)
        {
          this.errors.push('Introduce numero de Factura');
        }
        if(!this.salOrd)
        {
          this.errors.push('Introduce saldo de la Orden');
        }
        if(!this.salFac)
        {
          this.errors.push('Introduce saldo de la Factura');
        }
      }
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
        this.ordId='';
        this.salCli='';
        this.salIdFac='';
        this.salOrd='';
        this.salFac='';
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
