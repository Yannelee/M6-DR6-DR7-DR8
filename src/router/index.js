import Vue from 'vue'
import VueRouter from 'vue-router'
import Contact from '@/views/Contact.vue'
import Inicio from "@/views/Inicio.vue"
import Personajes from "@/views/Personajes.vue"
import Personaje from "@/views/Personaje.vue"
import NotFound from "@/views/NotFound.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Inicio
  },
  {
    path: '/contact',
    name: 'contacto',
    component: Contact,
  },
  {
    path: '/characters',
    name: 'characters',
    component: Personajes,
    alias: ['/personajes', '/people']
  },
  {
    path: '/characters/:id',
    name: 'character',
    component: Personaje,
    props: true
  },
  {
    path: '*',
    name: 'notFound',
    component: NotFound,
  },

]

const router = new VueRouter({
  routes
})

export default router
