<template>
  <div id="fullpage">
      <NavBar></NavBar>
  <div id="content">

    <h1 id="header1"> Generación de Reportes </h1>

    <div id="card">

      <div id="cardheader"></div>

      <div class="inputForm">

        <form>
          <div id="error">
            <ul>
              <li v-for="error in errors" v-bind:key="error">{{error}}</li>
            </ul>
          </div>

          <div style="color: #3B0EA4;">
          <label>- - - Fecha de Orden - - - </label>
          </div>

          <br>
          <label>Desde:</label>
          <datepicker v-model="fromDate" placeholder="Fecha":format="customFormatter"></datepicker>
          <br>
          <label>Hasta:</label>
          <datepicker v-model="toDate" placeholder="Fecha":format="customFormatter"></datepicker>
          <br>
          <br>

          <div style="color: #3B0EA4;">
          <label>- - - Fecha de Factura - - - </label>
          </div>

          <br>
          <label>Desde:</label>
          <datepicker v-model="fromDate" placeholder="Fecha":format="customFormatter"></datepicker>
          <br>
          <label>Hasta:</label>
          <datepicker v-model="toDate" placeholder="Fecha":format="customFormatter"></datepicker>
          <br>
          <br>

          <div style="color: #3B0EA4;">
          <label>- - - Representante - - -</label>
          </div>

          <br>
          <label>Desde:</label>
          <input  placeholder="No Cliente">
          <label>Hasta:</label>
          <input placeholder="No Cliente">
          <br>
          <br>

          <div style="color: #3B0EA4;">
          <label>- - - Cliente - - -</label>
          </div>

          <br>
          <label>Desde:</label>
          <input v-model="fromClient" placeholder="No Cliente">
          <label>Hasta:</label>
          <input v-model="toClient" placeholder="No Cliente">
          <br>
          <br>

          <div style="color: #3B0EA4;">
          <label>- - - Artículo - - -</label>
          </div>

          <br>
          <label>Desde:</label>
          <input v-model="fromItem" placeholder="No Articulo">
          <label>Hasta:</label>
          <input v-model="toItem" placeholder="No Articulo">
          <br>
        </form>
        <h2 style="text-align:center;">Generar Reportes</h2>
        <div id="buttons">
          <a :href="pdfLink" download="download">Pedido vs Surtido</a>
          <a :href="pdfLink" download="download">Ventas por Unidad</a>
          <a :href="pdfLink" download="download">Ventas por Representante</a>
          <a :href="pdfLink" download="download">Ventas por Cliente</a>
          <a :href="pdfLink" download="download">Ventas por Artículo</a>
          <a :href="pdfLink" download="download">Ventas por Mes-Año</a>
          <a :href="pdfLink" download="download">Comparativo de Ventas por Año</a>
        </div>

      </div>
    </div>
  </div>
</div>
</template>

<script>
import VueTableDynamic from 'vue-table-dynamic';
import AllSalesReportDetails from '@/components/Sales/AllSalesReportDetails.vue';
import Datepicker from 'vuejs-datepicker';
import moment from 'moment';
import axios from "axios";
import NavBar from '@/components/NavBar.vue';

export default {
  name: 'ReportGenerator',

  data() {

    return {
      pdfLink: require("@/assets/SampleReportModerna.pdf"),
      fromDate:'',
      toDate:'',
      fromBaan:'',
      toBaan:'',
      fromClient:'',
      toClient:'',
      fromItem:'',
      toItem:'',
      errors:[],


    }
  },
  methods: {


    orderReport(){
        //there will be a method here to establish connection with backend and sign up the articles' id and name, some day....
    },
    findOrders(){
      this.errors=[];
      if((this.fromDate && this.toDate) || (this.fromBaan && this.toBaan) || (this.fromClient&& this.toClient) || (this.fromItem&& this.toItem))
      {
        alert('Buscando Ordenes')
      }
      else
      {
        alert("Por favor, llene al menos un campo");

      }

    },
    customFormatter(date) {
      return moment(date).format('YYYY/MM/DD');
    }

  },

  components: { VueTableDynamic,AllSalesReportDetails,Datepicker,NavBar }
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
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
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
