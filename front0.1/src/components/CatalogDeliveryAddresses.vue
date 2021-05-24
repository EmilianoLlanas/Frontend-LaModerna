<template>

  <div id="content">
    
    <h1 id="header1"> Catálogo de Direcciones de Entrega </h1>

    <div id="card">

      <div id="cardheader"></div>

      <div class="inputForm">

        <div id="error">
          <ul>
            <li v-for="error in errors" v-bind:key="error">{{error}}</li>
          </ul>
        </div>

        <form>
          <label>Compañía</label>
          <br>
          <input v-model="addressCom" placeholder="Compañía"> 
          <br>
          <label>Cliente</label>
          <br>
          <input v-model="addressClient" placeholder="Cliente">
          <br>
          <label>Dirección de Entrega</label>
          <br>
          <input v-model="addressDelivery" placeholder="Numero de Dirección Entrega">
          <br>
          <label>Nombre</label>
          <br>
          <input v-model="addressName" placeholder="Nombre">
          <br>
          <label>Código postal</label>
          <br>
          <input v-model="addressPostCode" placeholder="Código Postal">
          <br>
          <label>Código de ruta</label>
          <br>
          <input v-model="addressRouteCode" placeholder="Código Ruta">
          <br>
          <label>País</label>
          <br>
          <input v-model="addressCountry" placeholder="País">
          <br>
          <label>RFC</label>
          <br>
          <input v-model="addressRFC" placeholder="RFC">
        </form>

      </div>
      
      <div id="buttons">
        <button @click="checkForm"> Dar de alta </button>
        <button @click="signDownAddress"> Dar de baja </button>
        <button @click="loadAddress"> Actualizar </button>
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
export default {
  name: 'CatalogDeliveryAddresses',
  data() {
    return {
      addressCom:'',
      addressClient:'',
      addressDelivery:'',
      addressName:'',
      addressPostCode:'',
      addressRouteCode:'',
      addressCountry:'',
      addressRFC:'',
      errors:[],
      params: {
        data: [
          ['Compañía', 'Cliente','Dirección entrega','Nombre',  'CódigoPostal', 'CódigoRuta','País', 'RFC'],
          ['224', '00320' ,'003', 'Dimex', '52315', '15024',  'MEX', 'MAPA630726BI8'],
          ['315', '00462' ,'001', 'Tuny','52600','16024','MEX', 'MAPA630726BI8'],
          ['425', '00730' ,'002', 'Plásticos de México','52856','15035','MEX', 'MAPA630726BI8'],
        ],
        deleteData:[],
        header: 'row',
        border: true,
        stripe: true,
        showCheck: true,
        enableSearch: true,
        sort: [0, 1],
        pagination: true,
        pageSize: 10,
        //newAddress:[addressCom, addressClient, addressPostCode, addressCountry, addressRFC]
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
        if(this.addressCom && this.addressClient && this.addressDelivery && this.addressName && this.addressPostCode && this.addressRouteCode && this.addressCountry && this.addressRFC){
          this.signUpAddress();
        }
        else{
          alert("Por favor, llene todos los campos correctamente para agregar un registro");
           if(!this.addressCom) 
          {
            this.errors.push('Introduce compañía');
          }
          if(!this.addressClient) 
          {
            this.errors.push('Introduce un cliente');
          }
          if(!this.addressDelivery) 
          {
            this.errors.push('Introduce una dirección');
          }
          if(!this.addressName) 
          {
            this.errors.push('Introduce un nombre');
          }        
          if(!this.addressPostCode) 
          {
            this.errors.push('Introduce un código postal');
          }   
          if(!this.addressRouteCode) 
          {
            this.errors.push('Introduce un código de ruta');
          } 
          if(!this.addressCountry) 
          {
            this.errors.push('Introduce un país para la dirección');
          } 
          if(!this.addressRFC) 
          {
            this.errors.push('Introduce un RFC');
          } 
        }
    },

    signUpAddress(){
        //there will be a method here to establish connection with backend and sign up the address' data, some day....
        if(this.addressCom==''||this.addressClient==''||this.addressPostCode==''||this.addressCountry==''||this.addressRFC==''||this.addressDelivery==''||this.addressName==''||this.addressRouteCode=='')
        {
          alert('Por favor, llene todos los campos para registrar una dirección')
        }
        else
        {
          this.params.data.push([this.addressCom, this.addressClient,this.addressDelivery,this.addressName, this.addressPostCode,this.addressRouteCode, this.addressCountry, this.addressRFC]);
        }
        this.addressCom='';
          this.addressClient='';
          this.addressDelivery='';
          this.addressName='';
          this.addressPostCode='';
          this.addressRouteCode='';
          this.addressCountry='';
          this.addressRFC='';
    },

    signDownAddress(){
        //there will be a method here to establish connection with backend and sign down the address' data, some day....
          this.addressCom='';
          this.addressClient='';
          this.addressDelivery='';
          this.addressName='';
          this.addressPostCode='';
          this.addressRouteCode='';
          this.addressCountry='';
          this.addressRFC='';
          
          console.log(this.params.deleteData.length)
          for (var i = this.params.deleteData.length-1; i>0 ; i--) {
          this.params.data.splice(this.params.deleteData[i], 1)
          }        
    },
    loadAddress(){
        //there will be a method here to establish connection with backend and update the table, some day....
        alert('Cargando catálogo, espere un momento por favor')
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

