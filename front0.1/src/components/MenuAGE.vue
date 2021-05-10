<template>

    <div id="test">
      <router-view/>
      <h1> AGENTE </h1>
      <button @click="searchOrder"> Buscar Orden </button>
      <br>
      <button @click="captureOrder"> Capturar Orden </button>
      <br>
      <button @click="modifyOrder"> Modificar Orden </button>
      <br>
      <button @click="consultOrder"> Consultar Orden </button>
      <br>
      <button @click="consultStatus"> Consulta de estatus por área </button>
      <br>
      <button @click="report"> Reporte de órdenes </button>
      <br>
      <button @click="loadTemplate"> Cargar templates </button>
      <br>
    </div>
</template>

<script>

export default {
  name: 'MenuAGE',
  methods: {
    loadTemplate(){
      alert('aqui ira una conexion con backend para subir un csv')
    },
    report(){

    },
    consultStatus(){

    },consultOrder(){

    },modifyOrder(){

    },
    captureOrder(){

    },
    searchOrder(){

    }
    }
  }

</script>

<style scoped>

#test {
  background-color: gray;

}

</style>
