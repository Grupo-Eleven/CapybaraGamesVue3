import { createRouter, createWebHistory } from 'vue-router'

import Index from '../view/HomeIndex.vue'
import VideoGameList from '../view/VideoGameList.vue'
import ContactForm from '../view/ContactForm.vue'

const routes = [
  {
    path: '/',
    name: 'index',
    component: Index
  },
  {
    path: '/videogames-list',
    name: 'videogames-list',
    component: VideoGameList
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactForm
  },
]


const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
