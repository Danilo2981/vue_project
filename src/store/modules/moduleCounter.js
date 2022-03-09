 // Modulo relacionado con el contador
 const moduleCounter = {

    // Para quitare lo global a los getters, modulos y acciones, false global 
    namespaced: true,

    state: {
        count: 1
    },
    mutations: {
        decrement(state){
            state.count--
        },
        increment(state){
            state.count++
        }
    }
}

export default moduleCounter;