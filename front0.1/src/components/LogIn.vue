<template>

    <div id="test">
      <router-view/>
      <h1> Login </h1>
      <button @click="navCatalogArticles"> Ir al catálogo de Artículos </button>
      <button @click="navCatalogCompanies"> Ir al catálogo de Compañías </button>
      <button @click="navCatalogPrices"> Ir al catálogo de Precios </button>
      <button @click="navCatalogClients"> Ir al catálogo de Clientes </button>
      <button @click="navCaptureOrder"> Ir a la captura de Órdenes </button>
      <button @click="navOrdersInProcess"> Ir a la Consulta de Órdenes en proceso </button>
      <button @click="navCatalogAgents"> Ir al catálogo de Agentes </button>
      <button @click="navCatalogDelivered"> Ir al catálogo de Entregas </button>
      <button @click="navCatalogFacturas"> Ir al catálogo de Facturas </button>
      <button @click="navCatalogSaldo"> Ir al catálogo de Saldos </button>
      <button @click="navCatalogWarehouse"> Ir al catálogo de Almacenes </button>
      <button @click="navCatalogDeliveryAddresses"> Ir al catálogo de Direcciones de entrega </button>
      <button @click="navAuthorizeDates"> Ir a la autorizacion de fechas de entrega </button>
    </div>

</template>

<script>

export default {
  name: 'Login',
  methods: {
      navCatalogArticles () {
      this.$router.push({ name:'CatalogArticles' });
    },
      navCatalogCompanies () {
      this.$router.push({ name:'CatalogCompanies' });
    },
    navCatalogPrices () {
      this.$router.push({name:'CatalogPrices'});
    },
    navCatalogClients() {
      this.$router.push({name:'CatalogClients'})
    },
    navCaptureOrder() {
      this.$router.push({name: 'CaptureOrder'})
    },
    navOrdersInProcess() {
      this.$router.push({name: 'OrdersInProcess'})
    },
    navCatalogAgents() {
      this.$router.push({name: 'CatalogAgents'})
    },
    navCatalogDelivered() {
      this.$router.push({name: 'CatalogDelivered'})
    },
    navCatalogFacturas() {
      this.$router.push({name: 'CatalogFacturas'})
    },
    navCatalogSaldo() {
      this.$router.push({name: 'CatalogSaldo'})
    },
    navCatalogWarehouse() {
      this.$router.push({name: 'CatalogWarehouse'})
    },

    navCatalogDeliveryAddresses() {
      this.$router.push({name: 'CatalogDeliveryAddresses'})
    },
    navAuthorizeDates(){
      this.$router.push({name:'AuthorizeDates'})
    }
    }
  }

</script>

<style scoped>

#test {
  background-color: gray;

}

</style>
