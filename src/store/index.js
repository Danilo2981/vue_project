    import { createStore } from 'vuex'

    export default createStore({
        state: {
            name: 'Danilo',
            lastname: 'Vega Lopez',
            count: 1
        },
        // getters define propiedades computadas de la store
        getters: {
            sizeLastname(state){
                return state.lastname.length
            }
        },
        mutations: {
            decrement(state){
                state.count--
            },
            increment(state){
                state.count++
            }
        },
        actions: {
        },
        modules: {
        }
    })