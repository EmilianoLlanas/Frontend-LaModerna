<template>
    <div>
    <h1> Catálogo de Direcciones de entrega </h1>
    <div class="inputForm">
    <form>
      <label>Compañia</label>
      <br>
      <input v-model="addressCom" placeholder="Compañía"> 
      <input v-model="addressClient" placeholder="Cliente">
      <input v-model="addressDelivery" placeholder="Dirección Entrega">
      <input v-model="addressName" placeholder="Nombre">
      <input v-model="addressPostCode" placeholder="CódigoPostal">
      <input v-model="addressRouteCode" placeholder="CódigoRuta">
      <input v-model="addressCountry" placeholder="País">
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
