    import { createStore } from 'vuex'

    // Cuando se separa modulos los getters los modulos y acciones tienen alcance global
    // Los states hacen referencia a cada modulo
    import moduleCounter from './modules/moduleCounter'
    import moduleUser from './modules/moduleUser'

    export default createStore({
        // Para modular se crea una constante que relacione lo anterior por concepto
        modules: {
            user: moduleUser,
            counter: moduleCounter,
        }
    })