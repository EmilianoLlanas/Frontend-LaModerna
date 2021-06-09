<template>
    <div>
    <h2> Reporte de Órdenes </h2>
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

        <li v-if="i===0"> Detalles: </li>

    </ul>

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
