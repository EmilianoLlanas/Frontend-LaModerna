<template>
    <div>
    <h2> Detalles</h2>
    <ul v-for="i of id" v-bind:key="i">

        <li v-if="i!==0"> Orden: {{ordenes[i].order}} </li>
        <li v-if="i!==0"> Orden Baan: {{ordenes[i].orderBaan}} </li>
        <li v-if="i!==0"> Cliente: {{ordenes[i].client}} </li>
        <li v-if="i!==0"> Nombre: {{ordenes[i].name}} </li>
        <li v-if="i!==0"> Producto: {{ordenes[i].product}} </li>
        <li v-if="i!==0"> Fecha solicitada: {{ordenes[i].dateRequired}} </li>
        <li v-if="i!==0"> Fecha planeada: {{ordenes[i].datePlaned}} </li>
        <li v-if="i!==0"> Stock: {{ordenes[i].stock}} </li>
        <li v-if="i!==0"> Unidades: {{ordenes[i].units}} </li>
        <li v-if="i!==0"> Observaciones: {{ordenes[i].observaciones}} </li>

        <li v-if="i===0"> Detalles: </li>

    </ul>

  </div>
</template>


<script>

export default {
  name: 'OrderStatusING',
  data(){
    return{
        ordenes:[
          {},
          {order:'1', orderBaan:'135', client:'0303', suaje:true, grabado:false,  name:'BIMBO', product:'PAPELITO-SUAVE-500',dateOrdered:'2021-03-21', dateRequired:'2021-04-21', datePlaned:'2021-04-22', stock:'4056', units:'1000', observaciones:'' },          
          {order:'2', orderBaan:'435', client:'0403', suaje:false, grabado:true,  name:'BARCEL', product:'CAJITA-400',dateOrdered:'2021-06-21', dateRequired:'2021-08-21', datePlaned:'2021-08-20', stock:'2050', units:'3000', observaciones:'Respetar fecha de entrega'}          
      ]
    }
  },
  props: {
    id:Array
  },
  methods:{
      save(){
        
      }
      
  }
  }
</script>
