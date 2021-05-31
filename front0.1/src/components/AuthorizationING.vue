<template>
    <div id="test">
    <h1 id="header1"> Autorización de ingeniería </h1>
    <div class="inputForm">
      <div id="error">
        <ul>
          <li v-for="error in errors" v-bind:key="error">{{error}}</li>
        </ul>
      </div>
    <form>
      <label>Orden Baan</label>
      <br>
      <input v-model="soBaan" placeholder="Orden Baan">
      <br>
      <label>No. de orden</label>
      <br>
      <input v-model="soNoOrden" placeholder="No de orden">
      <br>
      <label>Cliente</label>
      <br>
      <input v-model="soClient" placeholder="Cliente">
      <br>
   </form>
   <br>
   
  <button @click="search"> Buscar </button>
  </div>
   <div>
    </div>
  
  <div>
    
<table id="firstTable">
  <thead>
    <tr>
      <th> </th>
      <th>Orden</th>
      <th>Orden Baan</th>
      <th>Producto</th>
      <th> Fecha de entrega </th>
      <th> Fecha definida </th>
      <th> Stock </th>
      <th> Unidades </th>
      <th>Suaje</th>
      <th>Grabado</th>
      <th>Autorización ING </th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="row in rows" v-bind:key="row">
      <td><input type="checkbox" id="checkboxDie" v-model= row.isSelected></td>
      <td>{{row.order}}</td>
      <td>{{row.orderBaan}}</td>
      <td>{{row.product}}</td>
      <td>{{row.dateRequired}}</td>
      <td>{{row.datePlaned}}</td>
      <td>{{row.stock}}</td>
      <td>{{row.units}}</td>
      <td><input type="checkbox" id="checkboxDie" v-model= row.die></td>
      <td><input type="checkbox" id="checkboxEngraving" v-model= row.engraving></td>
      <td><input type="checkbox" :disabled="row.die && row.engraving ? false : true" id="checkboxAuthorization" v-model= row.authorization></td>
    </tr>
  </tbody>
</table>


  </div>
  <button @click="search"> Guardar </button>
  <br>
        <OrderStatusING :order="rows.order"></OrderStatusING>
  </div>

    
  
</template>

<script>
import VueTableDynamic from 'vue-table-dynamic';
import OrderStatusING from '@/components/OrderStatusING.vue';
export default {
  name: 'AuthorizationING',
  data() {
    return {
      rows: [
      {isSelected: false, order:'1', orderBaan:'135', client:'0303', die:true, engraving:false,  name:'BIMBO', product:'PAPELITO-SUAVE-500',dateOrdered:'2021-03-21', dateRequired:'2021-04-21', datePlaned:'2021-04-22', stock:'4056', units:'1000', authorization:false },          
      {isSelected: false, order:'2', orderBaan:'435', client:'0403', die:false, engraving:true,  name:'BARCEL', product:'CAJITA-400',dateOrdered:'2021-06-21', dateRequired:'2021-08-21', datePlaned:'2021-08-20', stock:'2050', units:'3000', authorization:false }          
    ],
      
    soClient:'',
    soNoOrden:'',
    soBaan:'',
    errors:[]
    }
  },
  methods: {
    onSelect (isChecked, index, data) {
      console.log('onSelect: ', isChecked, index, data)
      console.log('Checked Data:', this.$refs.table.getCheckedRowDatas(true))
    },
    onSelectionChange (checkedDatas, checkedIndexs, checkedNum) {
      console.log('onSelectionChange: ', checkedDatas, checkedIndexs, checkedNum)
      this.rows.id=checkedIndexs
    },
    search(){
      this.errors=[];
      if(this.soClient||this.soNoOrden||this.soBaan)
      {
        alert('Buscando '+this.soClient+' '+this.soNoOrden+' '+this.soBaan);
      }
      else
      {
        this.errors.push('Introduce un criterio de busqueda');
      }
    },
    saveAll(){
      
      alert('Guardando');
    }
  },
  components: { VueTableDynamic, OrderStatusING },
  computed: {
    "columns": function columns() {
      if (this.rows.length == 0) {
        return [];
      }
      return Object.keys(this.rows[0])
    }
    },
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