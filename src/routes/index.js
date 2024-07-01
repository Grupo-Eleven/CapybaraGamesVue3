import { createRouter, createWebHistory } from 'vue-router'

import Index from '../view/HomeIndex.vue'
import VideoGameList from '../view/VideoGameList.vue'
import VideoGame from '../view/VideoGame.vue'
import NewVideoGame from '../view/NewVideoGame.vue'
import ContactForm from '../view/ContactForm.vue'
import LoginForm from '../view/LoginForm.vue'

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
    path: '/new-videogame/',
    name: 'new-videogame',
    component: NewVideoGame
  },
  {
    path: '/videogame/:id',
    name: 'videogame',
    component: VideoGame
  },
  {
    path: '/login',
    name: 'login',
    component: LoginForm
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
