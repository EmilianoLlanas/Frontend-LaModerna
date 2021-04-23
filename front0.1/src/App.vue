<template>
<div>
  <router-view/>
</div>
</template>

<script>
import VuelidateForm from "./components/LogInPrincipal";
export default {
  name: 'App',
  components: {
    // VeeValidateForm,
    VuelidateForm
  }
};

</script>

<style >

</style>
