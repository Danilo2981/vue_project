<template>
<!--  se pasa a la vista los parametros obtenidos en la ruta-->
  <h1>Vista del post {{ $route.params.post }} del usuario {{ $route.params.user }}</h1>
</template>

<script>
export default {
  name: "UserPostView",
  // Para obtener los parametros de la ruta
  mounted: console.log('this.$route.params')
}
</script>

<style scoped>

</style>