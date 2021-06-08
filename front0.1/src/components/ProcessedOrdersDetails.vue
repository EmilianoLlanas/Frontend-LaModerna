<template>

  <div id="content">

    <h1 id="header1"> Reporte de Órdenes </h1>

    <div id="card">

      <div id="cardheader"></div>

      <div class="inputForm">

        <ul v-for="i of id">
        <li v-if="i!==0"> Número de Orden: {{ordenes[i].id}} </li>
        <li v-if="i!==0"> Cliente: {{ordenes[i].cliente}} </li>
        <li v-if="i!==0"> Nombre: {{ordenes[i].nombre}} </li>
        <li v-if="i!==0"> Fecha de Órden: {{ordenes[i].fechaOr}} </li>
        <li v-if="i!==0"> Artículo: {{ordenes[i].articulo}} </li>
        <li v-if="i!==0"> Descripción: {{ordenes[i].descripcion}} </li>
        <li v-if="i!==0"> Cantidad: {{ordenes[i].cantidad}} </li>
        <li v-if="i!==0"> Precio: {{ordenes[i].precio}} </li>
        <li v-if="i!==0"> Fecha solicitada: {{ordenes[i].fechaSol}} </li>
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
  name: 'ProcessedOrdersDetails',
  data(){
    return{
        ordenes:[
          {},
          {id:'1',cliente:'BIMBO',nombre:'PAPELITO-SUAVE-500',fechaOr:'2021-03-21',articulo:'PAPELITO SUAVE',descripcion:'Es un papelito que esta suave, peso por unidad: 800 g',cantidad:'500', precio:'$50250.00',fechaSol:'2021-02-28',facturacion:'Autorizada',cxc:'Autorizada',preciosAut:'Autorizada',ingenieria:'Autorizada',planeacion:'Autorizada'},
          {id:'2',cliente:'BARCEL',nombre:'PAPELITO-DURO-800',fechaOr:'2021-02-1',articulo:'PAPELITO DURO',descripcion:'Es un papelito que esta duro, peso por unidad: 1600 g',cantidad:'800', precio:'$63250.00',fechaSol:'2021-01-28',facturacion:'Autorizada',cxc:'Autorizada',preciosAut:'Autorizada',ingenieria:'Autorizada',planeacion:'Autorizada'},
          {id:'3',cliente:'TIA ROSA',nombre:'ALUMINIO-ARRUGADO-100',fechaOr:'2021-04-2',articulo:'ALUMINIO ARRUGADO',descripcion:'Es aluminio que esta arrugado, peso por unidad: 2300 g',cantidad:'100', precio:'$5050.00',fechaSol:'2021-03-8',facturacion:'Autorizada',cxc:'Autorizada',preciosAut:'Autorizada',ingenieria:'Autorizada',planeacion:'Autorizada'},
          {id:'4',cliente:'MOLINOS JORGE',nombre:'EMPAQUE-AWITADO-1500',fechaOr:'2020-12-26',articulo:'EMPAQUE AWITADO',descripcion:'Es un empaque que esta triste, pobrecito, peso por unidad: 1300 g',cantidad:'1500', precio:'$70950.00',fechaSol:'2020-12-8',facturacion:'Autorizada',cxc:'Autorizada',preciosAut:'Autorizada',ingenieria:'Autorizada',planeacion:'Autorizada'},
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
