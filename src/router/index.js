import Vue from 'vue'
import VueRouter from 'vue-router'
import Contact from '@/views/Contact.vue'
import Inicio from "@/views/Inicio.vue"
import Personajes from "@/views/Personajes.vue"
import Personaje from "@/views/Personaje.vue"

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
  },
  {
    path: '/characters/:id',
    name: 'character',
    component: Personaje,
  },

]

const router = new VueRouter({
  routes
})

export default router
