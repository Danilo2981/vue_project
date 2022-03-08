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

<!--    Prevent permite que no se envie la informacion-->
    <form @submit.prevent="changeNameComponent()">
      <input type="text" id="text" v-model="nameComponent">
      <button>Actualizar</button>
    </form>
  </main>
</template>

<script>
  // mapea las propiedades de state
  import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'

  // ...mapState los tres puntos permiten poner mas computed funciones
  export default {
    // Definir una data diferente a name ya referida en otros componentes
    data(){
      return {
        nameComponent: '',
      }
    },
    // Podemos definir nuestros propios metodos en base a la mutacion
    // methods: {
    //   ...mapMutations(['decrement', 'increment', 'changeName']),
      // metodo para ejecutar la mutacion de changeName para pasarle nameComponent
      // changeNameComponente(){
      //   this.changeName(this.nameComponent)
        // limpia campo de ingreso
    //     this.nameComponent = ''
    //   }
    // },
    // Para utilizar la accion elimino la mapMutation changeName y uso dispatch para traerla de la accion
    methods: {
      ...mapMutations(['decrement', 'increment']),
      ...mapActions(['changeName']),

      changeNameComponent(){
        // le pasamos lo de la propiedad nameComponent que es el input del formulario
        this.changeName(this.nameComponent);
        this.nameComponent = ''
      },

      // utilizamos el parametro nombre de la accion, al ser mapeado desaparece de aca
      // changeName(name){
      //   this.$store.dispatch('changeName', name);
      // }
    },
    computed: {
      ...mapState([ 'name', 'lastname', 'count']),
      ...mapGetters(['sizeLastname'])
    }
  }

</script>
