<template>
    <div>
    <h1> Catálogo de Direcciones de entrega </h1>
    <div class="inputForm">
    <form>
      <label>Compañia</label>
      <input v-model="addressCom" placeholder="Compañía"> 
      <label>Cliente</label>
      <input v-model="addressClient" placeholder="Cliente">
      <label>Dirección Entrega</label>
      <input v-model="addressDelivery" placeholder="Dirección Entrega">
      <label>Nombre</label>
      <input v-model="addressName" placeholder="Nombre">
      <label>Código Postal</label>
      <input v-model="addressPostCode" placeholder="Código Postal">
      <label>Código Ruta</label>
      <input v-model="addressRouteCode" placeholder="Código Ruta">
      <label>País</label>
      <input v-model="addressCountry" placeholder="País">
      <label>RFC</label>
      <input v-model="addressRFC" placeholder="RFC">
   </form>
  </div>
   <br>
   <button @click="signUpAddress"> Dar de alta </button>
   <button @click="signDownAddress"> Dar de baja </button>
   <button @click="loadAddress">Actualizar </button>
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
      params: {
        data: [
          ['Compañía', 'Cliente','Dirección entrega','Nombre',  'CódigoPostal', 'CódigoRuta','País', 'RFC'],
          ['224', '00320' ,'003', 'Dimex', '52315', '15024',  'MEX', 'MAPA630726BI8'],
          ['315', '00462' ,'001', 'Tuny','52600','16024','MEX', 'MAPA630726BI8'],
          ['425', '00730' ,'002', 'Plásticos de México','52856','15035','MEX', 'MAPA630726BI8'],
        ],
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
    },

    signDownAddress(){
        //there will be a method here to establish connection with backend and sign down the address' data, some day....
        if(this.addressPostCode=='')
        {
          alert('Por favor, llene el campo de Código Postal para eliminar una dirección')
        }
        else{
          alert('Eliminando dirección de código postal: '+this.addressPostCode);
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
