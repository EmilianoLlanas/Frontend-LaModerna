<template>

  <div id="content">

    <h1 id="header1"> Detalles </h1>

    <div id="card">

      <div id="cardheader"></div>

      <div class="inputForm">

        <ul v-for="i of id" v-bind:key="i">
        <li v-if="i!==0"> Número de Orden: {{ordenes[i].id}} </li>
        <li v-if="i!==0"> Orden Baan: {{ordenes[i].baan}} </li>
        <li v-if="i!==0"> Cliente: {{ordenes[i].cliente}} </li>
        <li v-if="i!==0"> Nombre: {{ordenes[i].nombre}} </li>
        <li v-if="i!==0"> Fecha de Órden: {{ordenes[i].fechaOr}} </li>
        <li v-if="i!==0"> Fecha solicitada: {{ordenes[i].fechaSol}} </li>
        <li v-if="i!==0"> Fecha definida: {{ordenes[i].fechaDef}} </li>
        <li v-if="i!==0"> Artículo: {{ordenes[i].articulo}} </li>
        <li v-if="i!==0"> Stock: {{ordenes[i].stock}} </li>
        <li v-if="i!==0"> Unidades: {{ordenes[i].unidad}} </li>
        <li v-if="i!==0"> Observaciones: {{ordenes[i].observaciones}} </li>
        <li v-if="i!==0"> Estatus de autorización por área:</li>
        <ul>
        <li v-if="i!==0"> Facturación: <b>{{ordenes[i].facturacion}}</b> </li>
        <li v-if="i!==0"> Cuentas por Cobrar: <b>{{ordenes[i].cxc}}</b> </li>
        <li v-if="i!==0"> Precios: <b>{{ordenes[i].preciosAut}}</b> </li>
        <li v-if="i!==0"> Ingeniería: <b>{{ordenes[i].ingenieria}}</b> </li>
        <li v-if="i!==0"> Planeación: <b>{{ordenes[i].planeacion}}</b></li>
        <br>
        </ul>

        <li v-if="i===0"> DETALLES </li>

        </ul>
      </div>
    </div>

  </div>
</template>


<script>

export default {
  name: 'SalesOrderStatusDetails',
  data(){
    return{
        ordenes:[
          {},
          {id:'1',baan:'135',cliente:'315',nombre:'BIMBO',fechaOr:'2021-03-21',fechaSol:'2021-04-21',fechaDef:'2021-04-22',articulo:'PAPELITO SUAVE',stock: '3000', unidad:'5000', observaciones:' ',facturacion:'No Autorizada',cxc:'No Autorizada',preciosAut:'No Autorizada',ingenieria:'No Autorizada',planeacion:'Autorizada'},
          {id:'2',baan:'256',cliente:'648',nombre:'BARCEL',fechaOr:'2021-02-1',fechaSol:'2021-05-21',fechaDef:'2021-05-22',articulo:'PAPELITO DURO',stock: '500', unidad:'5000', observaciones:' Respetar la fecha de entrega solicitada ',facturacion:'No Autorizada',cxc:'No Autorizada',preciosAut:'Autorizada',ingenieria:'No Autorizada',planeacion:'Autorizada'},
          {id:'3',baan:'389',cliente:'972',nombre:'TIA ROSA',fechaOr:'2021-04-2',fechaSol:'2021-04-21',fechaDef:'2021-04-22',articulo:'ALUMINIO ARRUGADO', stock: '4000', unidad:'5000', observaciones:' ',facturacion:'No Autorizada',cxc:'Autorizada',preciosAut:'No Autorizada',ingenieria:'No Autorizada',planeacion:'Autorizada'},
          {id:'4',baan:'412',cliente:'135',nombre:'MOLINOS JORGE',fechaOr:'2020-12-26',fechaSol:'2021-04-21',fechaDef:'2021-04-22',articulo:'EMPAQUE AWITADO', stock: '3010', unidad:'5000', observaciones:' ',facturacion:'Autorizada',cxc:'Autorizada',preciosAut:'Autorizada',ingenieria:'No Autorizada',planeacion:'Autorizada'},
          {id:'5',baan:'545',cliente:'315',nombre:'BIMBO',fechaOr:'2021-03-21',fechaSol:'2021-04-21',fechaDef:'2021-04-22',articulo:'PAPELITO SUAVE',stock: '3000', unidad:'8000', observaciones:' ',facturacion:'Autorizada',cxc:'Autorizada',preciosAut:'Autorizada',ingenieria:'Autorizada',planeacion:'Autorizada'},
          {id:'6',baan:'678',cliente:'648',nombre:'BARCEL',fechaOr:'2021-02-1',fechaSol:'2021-04-21',fechaDef:'2021-04-22',articulo:'PAPELITO DURO',stock: '3000', unidad:'9000', observaciones:' Entregar en la direccion 3 ',facturacion:'Autorizada',cxc:'Autorizada',preciosAut:'Autorizada',ingenieria:'Autorizada',planeacion:'Autorizada'},
          {id:'7',baan:'723',cliente:'972',nombre:'TIA ROSA',fechaOr:'2021-04-2',fechaSol:'2021-04-21',fechaDef:'2021-04-22',articulo:'ALUMINIO ARRUGADO',stock: '3400', unidad:'5000', observaciones:' ',facturacion:'Autorizada',cxc:'Autorizada',preciosAut:'Autorizada',ingenieria:'Autorizada',planeacion:'Autorizada'},
          {id:'8',baan:'856',cliente:'135',nombre:'MOLINOS JORGE',fechaOr:'2020-12-26',fechaSol:'2021-04-21',fechaDef:'2021-04-22',articulo:'EMPAQUE AWITADO',stock: '3010', unidad:'5000', observaciones:' ',facturacion:'Autorizada',cxc:'Autorizada',preciosAut:'Autorizada',ingenieria:'Autorizada',planeacion:'Autorizada'},
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
