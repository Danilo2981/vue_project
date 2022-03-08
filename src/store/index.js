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
            // Pasarle valores a las mutaciones, a travez del estado y la variable
            changeName(state, name){
                state.name = name
            },
            decrement(state){
                state.count--
            },
            increment(state){
                state.count++
            }
        },
        // Permite realizar operaciones asincronas
        actions: {
            // recibe un valor como segundo parametro, se puede pasar con {} el commit para acceder
            // directamente con commit en lugar de contexto, dentro de las llaves se puede poner states
            changeName({ commit }, name){
                setTimeout(() => {
                    console.log('Actualizado en la base de datos');
                    // A partir de context vamos al metodo commit para la mutaciones
                    commit('changeName', name);
                },500);
            }
        },
        modules: {
        }
    })