import Vue from 'vue'
import VueRouter from 'vue-router'

const CONTACT = () => import (/* webpackChunkName: 'contact' */ '@/views/Contact.vue')
const PERSONAJES = () => import (/* webpackChunkName: 'personajes' */ '@/views/Personajes.vue')
const PERSONAJE = () => import(/* webpackChunkName: 'personaje' */ '@/views/Personaje.vue')
const NOTFOUND = () => import(/* webpackChunkName: 'notFound' */ '@/views/NotFound.vue')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: ()=> import(/* webpackChunkName: 'inicio' */ '@/views/Inicio.vue')
  },
  {
    path: '/contact',
    name: 'contacto',
    component: CONTACT,
  },
  {
    path: '/characters',
    name: 'characters',
    component: PERSONAJES,
    alias: ['/personajes', '/people']
  },
  {
    path: '/characters/:id',
    name: 'character',
    component: PERSONAJE,
    props: true
  },
  {
    path: '*',
    name: 'notFound',
    component: NOTFOUND,
  },
]

const router = new VueRouter({
  routes
})

export default router
