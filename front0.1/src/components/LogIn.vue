<template>
    <div>
      <router-view/>
      <h1> Login </h1>
      <button @click="navCatalogArticles"> Ir al catálogo de Artículos </button>
      <button @click="navCatalogCompanies"> Ir al catálogo de Compañías </button>
      <button @click="navCatalogPrices"> Ir al catálogo de Precios </button>
      <button @click="navCatalogClients"> Ir al catálogo de Clientes </button>
      <button @click="navCaptureOrder"> Ir a la captura de Órdenes </button>
      <button @click="navCaptureOrder"> Ir a la Consulta de Órdenes en proceso </button>
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
    navCaptureOrder() {
      this.$router.push({name: 'OrdersInProcess'})
    }
    }
  }

</script>

<style scoped>

</style>
