// Constante para modulacion relacionadas con el Usuario
const moduleUser = {

    // Para quitare lo global a los getters, modulos y acciones, false global 
    namespaced: true,

    state: {
        name: 'Danilo',
        lastname: 'Vega Lopez',
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
    },
    // Permite realizar operaciones asincronas
    actions: {
        // recibe un valor como segundo parametro, se puede pasar con {} el commit para acceder
        // directamente con commit en lugar de contexto, dentro de las llaves se puede poner states
        changeName({ commit }, name){
            // Utilizar promesas para que pase algo hasta que pase lo otro
            
            return new Promise((resolve) => {
                setTimeout(() => {
                    
                    // A partir de context vamos al metodo commit para la mutaciones
                    commit('changeName', name);
                    // Resolvemos la promesa
                    resolve();
                    // Reject va cuando la promesa no se puede resolver
                },500);
            });
        },
        
        // Esperar que la promesa culmine para ejecutar una accion con async await
        // Debe recibir un parametro
        async confirmationChangeName({ dispatch }, name){
            await dispatch('changeName', name);
            console.log('Actualizado en la base de datos');
        }
    }
}

export default moduleUser;