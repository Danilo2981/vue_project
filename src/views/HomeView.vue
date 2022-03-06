<script setup>
// import TheWelcome from '@/components/TheWelcome.vue'
import miTienda from '@/components/miTienda.vue'
</script>

<template>
  <main>
    <miTienda />
<!--    Trae lo alamacenado den index.js de la carpeta store-->
    <h2>Mi nombre es: {{ name + ' ' + lastname }}</h2>
  </main>
</template>

<script>
  // mapea las propiedades de state
  import { mapState } from 'vuex'

  export default {
    computed: {
      ...mapState([ 'name', 'lastname'])
    }
  }

</script>
