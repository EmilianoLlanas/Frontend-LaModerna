<template>
    <div>
      <router-view/>
      <h1> Login </h1>
      <button @click="navCatalogArticles"> Ir al catálogo de Articulos </button>
      <button @click="navCatalogCompanies"> Ir al catálogo de Compañías </button>
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
    }
    }
  }

</script>

<style scoped>

</style>
