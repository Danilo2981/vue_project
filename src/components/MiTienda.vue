<template>
  <h1>Mi tienda</h1>

  <!--    Trae lo alamacenado den index.js de la carpeta store-->
    <h2>Mi nombre es: {{ name }}</h2>
    <br>
    <h2>Mi nombre es: {{ lastname }}</h2>
    <br>
    <p>El apellido tiene {{ sizeLastname }} letras.</p>
    <br>
    
<!--    Prevent permite que no se envie la informacion-->
    <form @submit.prevent="changeNameComponent()">
      <input type="text" id="text" v-model="nameComponent">
      <button>Actualizar</button>
    </form>

    <br>
    <div>
<!--      Count proviene de State no se puede alterar aca -->
<!--      Se utiliza una mutacoin para poder alterar count-->
      <button @click="decrement()">Disminuir</button>
        {{ count }}
      <button @click="increment()">Aumentar</button>
    </div>
    

</template>

<script>
  // mapea las propiedades de state
  import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'

  // Si se trabaja todo con un modulo se puede importar por modulos asi no se pone el nombre del modulo al inicio
  // import { createNamespacedHelpers } from "vuex";

  // Se elimina el iport del store y se lo pasa por una constante
  // const { mapState, mapGetters, mapMutations, mapActions } = createNamespacedHelpers('user')

  // ...mapState los tres puntos permiten poner mas computed funciones
  export default {
    name: "MiTienda",
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
      ...mapMutations('counter', ['decrement', 'increment']),
      ...mapActions('user',['changeName', 'confirmationChangeName']),

      changeNameComponent(){
        // le pasamos lo de la propiedad nameComponent que es el input del formulario
        // Le pasamos la promesa para que espere en el formulario y desaparezca cuando actualiza
        this.confirmationChangeName(this.nameComponent).then(() => {
          this.nameComponent = ''
        });
        
      },

      // utilizamos el parametro nombre de la accion, al ser mapeado desaparece de aca
      // changeName(name){
      //   this.$store.dispatch('changeName', name);
      // }
    },
    // Cuando hay modulos el mapState tiene que hacer referencia a los modulos asignandole una funcion
    // de tipo flecha
    computed: {
      // Al utilizar namesapced true se puede mapear de la siguiente forma
      ...mapState('user',[ 'name', 'lastname']),
      ...mapState('counter',['count']),
      
      // mapState sin utilizar namespaced true
      // ...mapState({
      //     name: state => state.user.name,
      //     lastname: state => state.user.lastname,
      //     count: state => state.counter.count,          
      // }),

      // Si namespaced es true en el modulo hay que llamar al modulo antes
      ...mapGetters('user',['sizeLastname'])
    }
  }
</script>

<style scoped>

</style>