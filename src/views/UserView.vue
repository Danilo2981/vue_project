<template>
<!--  Con rutas opcionales -->
  <div v-if="$route.params.userId">
<!--    en lugar de colocar {{ $route.params.userId }} lo remplazo con el props-->
    <h1>Detalle del usuario con id {{ userId }}.</h1>
  </div>

  <div v-else>
    <h1>Lista de usuarios</h1>
  </div>

  <div>
    <nav>
<!--      captura del id del usuario con v-bim-->
<!--      primera ruta contenido por defecto-->
<!--      cambia las rutas "'/users/' + $route.params.userId" por el nombre con el parametro -->
      <RouterLink :to="{ name: 'userIndex', params: {userId: userId}}">Indice</RouterLink>
      <RouterLink :to="{ name: 'userProfile', params: {userId: userId}}">Perfil</RouterLink>
      <RouterLink :to="{ name: 'userCourses', params: {userId: userId}}">Cursos</RouterLink>
    </nav>
  </div>
<!--  Perimte ver las rutas hijas en el Routre link-->
  <RouterView />
</template>

<script>
export default {
  name: "UserView",
  // trae el props de la hoja index.js la padre de las hijas
  props: ['userId']
}
</script>

<style scoped>

</style>