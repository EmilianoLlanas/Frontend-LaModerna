<template>
    <div>
      <router-view/>
      <h1> Login </h1>
      <button @click="navCatalogArticles"> Ir al catálogo de Articulos </button>

    </div>

</template>

<script>

export default {
  name: 'Login',
  methods: {
      navCatalogArticles () {
      this.$router.push({ name:'CatalogArticles' });
    }

    }
  }

</script>

<style scoped>

</style>
