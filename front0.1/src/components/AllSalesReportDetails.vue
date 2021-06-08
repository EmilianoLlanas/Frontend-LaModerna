<template>

  <div id="content">

    <h1 id="header1"> Reporte de Órdenes </h1>

    <div id="card">

      <div id="cardheader"></div>

      <div class="inputForm">

        <ul v-for="i of id">
          <li v-if="i!==0"> Número de Orden: {{ordenes[i].id}} </li>
          <li v-if="i!==0"> Orden Baan: {{ordenes[i].obaan}} </li>
          <li v-if="i!==0"> CIL: {{ordenes[i].cil}} </li>
          <li v-if="i!==0"> Nombre: {{ordenes[i].nombre}} </li>
          <li v-if="i!==0"> F.Orden: {{ordenes[i].forden}} </li>
          <li v-if="i!==0"> F.Solicitud: {{ordenes[i].fsoli}} </li>
          <li v-if="i!==0"> F.Def: {{ordenes[i].fdef}} </li>
          <li v-if="i!==0"> Articulo: {{ordenes[i].articulo}} </li>
          <li v-if="i!==0"> Unidad: {{ordenes[i].unidad}} </li>
          <li v-if="i!==0"> Notas:{{ordenes[i].notas}}</li>

          <br>

          <ul>
          <li v-if="i!==0"> Facturación: <b>{{ordenes[i].facturacion}}</b> </li>
          <li v-if="i!==0"> Cuentas por Cobrar: <b>{{ordenes[i].cxc}}</b> </li>
          <li v-if="i!==0"> Precios: <b>{{ordenes[i].preciosAut}}</b> </li>
          <li v-if="i!==0"> Ingeniería: <b>{{ordenes[i].ingenieria}}</b> </li>
          <li v-if="i!==0"> VB: <b>{{ordenes[i].bv}}</b></li>
          <li v-if="i!==0"> Baan: <b>{{ordenes[i].baan}}</b></li>
          <li v-if="i!==0"> BervC: <b>{{ordenes[i].bervc}}</b></li>
          <li v-if="i!==0"> Rep: <b>{{ordenes[i].rep}}</b></li>
          </ul>
          <li v-if="i===0"> DETALLES </li>
        </ul>

        <br>

      </div>  
    </div>
  </div>
</template>


<script>

export default {
  name: 'ProcessedOrdersDetails',
  data(){
    return{
        ordenes:[
          {},
          {id:'1',obaan:'1881',cil:'1991',nombre:'Sabritas',forden:'15-03-19',fsoli:'18-03-19',fedf:'F. Def', articulo:'1991',unidad:'12',notas:'LSL',facturacion:'Autorizada',cxc:'No Autorizada',preciosAut:'No Autorizada',ingenieria:'Autorizada',bv:' No Autorizada',baan:'Autorizada',bervc:'No Autorizada',rep:'No Autorizada'},
          {id:'2',obaan:'1882',cil:'2021',nombre:'Barcel',forden:'15-03-19',fsoli:'18-03-19',fedf:'F. Def', articulo:'2020',unidad:'192',notas:'MKL',facturacion:'Autorizada',cxc:'Autorizada',preciosAut:'Autorizada',ingenieria:'Autorizada',bv:'Autorizada',baan:'Autorizada',bervc:'Autorizada',rep:'Autorizada'},

      ]
    }
  },
  props: {
    id:Array
  }
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
  font-size: 30px;
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
</style>
