import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

// createWebHashHistory permite adaptar las rutas a todas las bases de datos, sin embargo
// no envia datos al servidor e impide posicionamiento SEO
// createWebHistory utiliza HTML5
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
      // Ruta de redireccion
    {
      path: '/blog',
      redirect: {name: 'blog'}
    },
    {
      path: '/post',
      name: 'blog',
      component: () => import('../views/BlogView.vue')
    },
      // Pasar un parametro a una ruta
    {
      // Con dos puntos indica que voy a recibir un paramentro y se va a almacenar en variable
      // y debe ser pasado en el componente {{ $route.params.post }} si la ruta es '/blog/:article'
      // en el componente debe ir {{ $route.params.article }}, importante los dos puntos
      path: '/blog/:post',
      name: 'post',
      component: () => import('../views/PostView.vue')
    },
    {
      path: '/user/:user/post/:post',
      name: 'userpost',
      component: () => import('../views/UserPostView.vue')
    },
    // Vistas con nombres similares
    {
      // especifica que la ruta es un numero y de no serlo pasa a la siguiente ruta
      path: '/compras/:orderId(\\d+)',
      name: 'order',
      component: () => import('../views/OrderView.vue')
    },
      // El signo ? permite poner rutas opcionales
    {
      path: '/users/:userId(\\d+)?',
      name: 'users',
      component: () => import('../views/UserView.vue'),
      // para pasar la informacion con un props en cualquier vista
      props: true,
      // rutas anidadas aparecen y no cambian la ruta padre
      children: [
        {
          // En el primer children path va en blanco para que conicida con la ruta principal
          // /users/:userId/
          path: '',
          name: 'userIndex',
          component: () => import('../views/users/UsersIndex.vue')
        },
        {
          // /users/:userId/profile
          path: 'profile',
          name: 'userProfile',
          component: () => import('../views/users/UsersProfile.vue')
        },
        {
          // /users/:userId/courses
          path: 'courses',
          name: 'userCourses',
          component: () => import('../views/users/UsersCourses.vue')
        }
      ]
    },
    {
      path: '/:pathMatch(.*)',
      name: '404',
      component: () => import('../views/404.vue')
    }
  ]
})

export default router
