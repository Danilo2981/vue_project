<script setup>
// import TheWelcome from '@/components/TheWelcome.vue'
import miTienda from '@/components/miTienda.vue'
</script>

<template>
  <main>
    <miTienda />
<!--    Trae lo alamacenado den index.js de la carpeta store-->
    <h2>Mi nombre es: {{ name + ' ' + lastname }}</h2>
    <p>El apellido tiene {{ sizeLastname }} letras.</p>

    <div>
<!--      Count proviene de State no se puede alterar aca -->
<!--      Se utiliza una mutacoin para poder alterar count-->
      <button @click="decrement()">Disminuir</button>
        {{ count }}
      <button @click="increment()">Aumentar</button>
    </div>
  </main>
</template>

<script>
  // mapea las propiedades de state
  import { mapState, mapGetters, mapMutations } from 'vuex'

  // ...mapState los tres puntos permiten poner mas computed funciones
  export default {
    // Podemos definir nuestros propios metodos en base a la mutacion
    methods: {
      ...mapMutations(['decrement', 'increment']),
    },
    computed: {
      ...mapState([ 'name', 'lastname', 'count']),
      ...mapGetters(['sizeLastname'])
    }
  }

</script>
