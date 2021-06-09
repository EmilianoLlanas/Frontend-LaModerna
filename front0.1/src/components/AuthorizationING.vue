<template>

  <div id="content">

    <h1 id="header1"> Autorización de Ingeniería </h1>

    <div id="card">

      <div id="cardheader"></div>

      <div class="inputForm">

        <div id="error">
          <ul>
            <li v-for="error in errors" v-bind:key="error">{{error}}</li>
          </ul>
        </div>

        <form>
          <label >Filtrar</label>
          <br>
          <input v-model="filter" placeholder="Orden Baan, No de orden o Cliente ">
          <br>
        </form>
        <br>
                
      </div>

      <div id="tables">
        <div id="table">
          <table id="firstTable">
            <thead>
              <tr>
                <th style="padding: 15px; color: purple">Orden</th>
                <br>
                <th style="padding: 15px; color: purple">Orden Baan</th>
                <br>
                <th style="padding: 15px; color: purple">Cliente</th>
                <br>
                <th style="padding: 15px; color: purple">Suaje</th>
                <br>
                <th style="padding: 15px; color: purple">Grabado</th>
                <br>
                <th style="padding: 15px; color: purple">Autorización ING </th>
              </tr>
            </thead>

            <tbody>
              <tr v-for="(row, index) in filteredRows" :key="`row-${index}`">
                <td style="padding: 15px">{{row.order}}</td>
                <br>
                <td style="padding: 15px">{{row.orderBaan}}</td>
                <br>
                <td style="padding: 15px">{{row.client}}</td>
                <br>
                <td style="padding: 15px"><input type="checkbox" id="checkboxDie" v-model= row.die ></td>
                <br>
                <td style="padding: 15px"><input type="checkbox" id="checkboxEngraving" v-model= row.engraving></td>
                <br>
                <td style="padding: 15px"><input type="checkbox" :disabled="row.die && row.engraving ? false : true" id="checkboxAuthorization" v-model= row.authorization></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div id="buttons">
        <button @click="saveAll"> Guardar </button>
        <br>
      </div>

      <div id="details">
        <h2 style="color: #3B0EA4; font-size: 20px; font-family: Verdana;">Detalles</h2>

        <table id="detailsTable">
          <thead>
            <tr>
              <th style="padding: 10px; color: purple">Orden</th>
              <br>
              <th style="padding: 10px; color: purple">Orden Baan</th>
              <br>
              <th style="padding: 5px; color: purple">Producto</th>
              <br>
              <th style="padding: 10px; color: purple"> Fecha de entrega </th>
              <br>
              <th style="padding: 10px; color: purple"> Fecha definida </th>
              <br>
              <th style="padding: 10px; color: purple"> Stock </th>
              <br>
              <th style="padding: 10px; color: purple"> Unidades </th>
              <br>
              <th style="padding: 10px; color: purple">Suaje</th>
              <br>
              <th style="padding: 10px; color: purple">Grabado</th>
              <br>
              <th style="padding: 10px; color: purple">Autorización ING </th>
              <br>
              <th style="padding: 10px; color: purple">Observaciones </th>
            </tr>
          </thead>

          <tbody>
            <tr v-for="(row, index) in filteredRows" :key="`row-${index}`">
              <td style="padding: 10px">{{row.order}}</td>
              <br>
              <td style="padding: 10px">{{row.orderBaan}}</td>
              <br>
              <td style="padding: 5px">{{row.product}}</td>
              <br>
              <td style="padding: 10px">{{row.dateRequired}}</td>
              <br>
              <td style="padding: 10px">{{row.datePlaned}}</td>
              <br>
              <td style="padding: 10px">{{row.stock}}</td>
              <br>
              <td style="padding: 10px">{{row.units}}</td>
              <br>
              <td style="padding: 10px"><input type="checkbox" id="checkboxDie" v-model= row.die></td>
              <br>
              <td style="padding: 10px"><input type="checkbox" id="checkboxEngraving" v-model= row.engraving></td>
              <br>
              <td style="padding: 10px"><input type="checkbox" :disabled="row.die && row.engraving ? false : true" id="checkboxAuthorization" v-model= row.authorization></td>
              <br>
              <td style="padding: 10px">{{row.notes}} <button @click="writeNote(index, row.notes)">+</button></td>
            </tr>
          </tbody>
        </table>
      </div>
                  
      <div id="notes" hidden>
        <label style="color: #3B0EA4; font-size: 20px; font-family: Verdana;"> Observaciones </label>
        <div class="inputForm">
          <br>
          <label> Orden Baan: </label> <input type="text" placeholder="orden baan"/>
        </div>

        <div class="inputForm">
        <label>Tipo</label>
        <select name="rate" >
          <option value="die">Suaje</option>
          <option value="engraving">Grabado</option>
        </select> 
        </div>

        <div class="inputForm">
          <textarea v-model="notes" placeholder="Observaciones"></textarea>
        </div>

        <div id="buttons">
          <br>
          <button @click="addNote">Agregar</button>
        </div>
      </div>

    </div>


  </div>   
</template>

<script>
import VueTableDynamic from 'vue-table-dynamic';
import SalesOrderStatusDetails from '@/components/SalesOrderStatusDetails.vue';
export default {
  name: 'AuthorizationING',
  data() {
    return {
      rows: [
      {order:'1', orderBaan:'135', client:'0303', suaje:true, grabado:false,  name:'BIMBO', product:'PAPELITO-SUAVE-500',dateOrdered:'2021-03-21', dateRequired:'2021-04-21', datePlaned:'2021-04-22', stock:'4056', units:'1000', autorization:false },          
      {order:'2', orderBaan:'435', client:'0403', suaje:false, grabado:true,  name:'BARCEL', product:'CAJITA-400',dateOrdered:'2021-06-21', dateRequired:'2021-08-21', datePlaned:'2021-08-20', stock:'2050', units:'3000', autorization:false }          
    ],
      
    soCliente:'',
    soNoOrden:'',
    soBaan:'',
      params: {
        data: [
          
        ],
        id:[],
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
      this.params.id=checkedIndexs
    },
    search(){
      //aqui habra una conexion a backend para guardar la orden
      this.soCliente='',
      this.soNoOrden='',
      this.soBaan=''
    }
  },
  components: { VueTableDynamic, SalesOrderStatusDetails },
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

#tables{
  margin-bottom: 3em;
}

#firstTable{
  margin-left: 5em;
}

#details{
  margin-right: 5%;
  margin-left: 5%;
}

#detailsTable{
  font-size: 12px;
}

#notes{
  margin-bottom: 2em;
  margin-right: 5%;
  margin-left: 5%;
}

</style>
