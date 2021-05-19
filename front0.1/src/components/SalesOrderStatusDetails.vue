<template>
    <div>
    <h2> Detalle de la orden</h2>
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
        <li v-if="i!==0"> Cantidad: {{ordenes[i].unidad}} </li>
        <li v-if="i!==0"> Observaciones: {{ordenes[i].observaciones}} </li>
        
        <li v-if="i!==0"> Estatus de autorización por área:</li>
        <ul>
            <li v-if="i!==0"> Facturación: <b>{{ordenes[i].facturacion}}</b> </li>
            <li v-if="i!==0"> Cuentas por Cobrar: <b>{{ordenes[i].cxc}}</b> </li>
            <li v-if="i!==0"> Precios: <b>{{ordenes[i].preciosAut}}</b> </li>
            <li v-if="i!==0"> Ingeniería: <b>{{ordenes[i].ingenieria}}</b> </li>
            <li v-if="i!==0"> Planeación: <b>{{ordenes[i].planeacion}}</b></li>
        </ul>

        <li v-if="i===0"> Detalles: </li>

    </ul>

  </div>
</template>


<script>

export default {
  name: 'SalesOrderStatusDetails',
  data(){
    return{
        ordenes:[
          {},
          {id:'1',baan:'135',cliente:'BIMBO',nombre:'PAPELITO-SUAVE-500',fechaOr:'2021-03-21',fechaSol:'2021-04-21',fechaDef:'2021-04-22',articulo:'PAPELITO SUAVE',stock: '3000', unidad:'5000', observaciones:' ',facturacion:'No Autorizada',cxc:'No Autorizada',preciosAut:'No Autorizada',ingenieria:'No Autorizada',planeacion:'Autorizada'},
          {id:'2',baan:'256',cliente:'BARCEL',nombre:'PAPELITO-DURO-800',fechaOr:'2021-02-1',fechaSol:'2021-05-21',fechaDef:'2021-05-22',articulo:'PAPELITO DURO',stock: '500', unidad:'5000', observaciones:' Respetar la fecha de entrega solicitada ',facturacion:'No Autorizada',cxc:'No Autorizada',preciosAut:'Autorizada',ingenieria:'No Autorizada',planeacion:'Autorizada'},
          {id:'3',baan:'389',cliente:'TIA ROSA',nombre:'ALUMINIO-ARRUGADO-100',fechaOr:'2021-04-2',fechaSol:'2021-04-21',fechaDef:'2021-04-22',articulo:'ALUMINIO ARRUGADO', stock: '4000', unidad:'5000', observaciones:' ',facturacion:'No Autorizada',cxc:'Autorizada',preciosAut:'No Autorizada',ingenieria:'No Autorizada',planeacion:'Autorizada'},
          {id:'4',baan:'412',cliente:'MOLINOS JORGE',nombre:'EMPAQUE-AWITADO-1500',fechaOr:'2020-12-26',fechaSol:'2021-04-21',fechaDef:'2021-04-22',articulo:'EMPAQUE AWITADO', stock: '3010', unidad:'5000', observaciones:' ',facturacion:'Autorizada',cxc:'Autorizada',preciosAut:'Autorizada',ingenieria:'No Autorizada',planeacion:'Autorizada'},
          {id:'5',baan:'545',cliente:'BIMBO',nombre:'PAPELITO-SUAVE-500',fechaOr:'2021-03-21',fechaSol:'2021-04-21',fechaDef:'2021-04-22',articulo:'PAPELITO SUAVE',stock: '3000', unidad:'8000', observaciones:' ',facturacion:'Autorizada',cxc:'Autorizada',preciosAut:'Autorizada',ingenieria:'Autorizada',planeacion:'Autorizada'},
          {id:'6',baan:'678',cliente:'BARCEL',nombre:'PAPELITO-DURO-800',fechaOr:'2021-02-1',fechaSol:'2021-04-21',fechaDef:'2021-04-22',articulo:'PAPELITO DURO',stock: '3000', unidad:'9000', observaciones:' Entregar en la direccion 3 ',facturacion:'Autorizada',cxc:'Autorizada',preciosAut:'Autorizada',ingenieria:'Autorizada',planeacion:'Autorizada'},
          {id:'7',baan:'723',cliente:'TIA ROSA',nombre:'ALUMINIO-ARRUGADO-100',fechaOr:'2021-04-2',fechaSol:'2021-04-21',fechaDef:'2021-04-22',articulo:'ALUMINIO ARRUGADO',stock: '3400', unidad:'5000', observaciones:' ',facturacion:'Autorizada',cxc:'Autorizada',preciosAut:'Autorizada',ingenieria:'Autorizada',planeacion:'Autorizada'},
          {id:'8',baan:'856',cliente:'MOLINOS JORGE',nombre:'EMPAQUE-AWITADO-1500',fechaOr:'2020-12-26',fechaSol:'2021-04-21',fechaDef:'2021-04-22',articulo:'EMPAQUE AWITADO',stock: '3010', unidad:'5000', observaciones:' ',facturacion:'Autorizada',cxc:'Autorizada',preciosAut:'Autorizada',ingenieria:'Autorizada',planeacion:'Autorizada'},
      ]
    }
  },
  props: {
    id:Array
  }
  }
</script>
