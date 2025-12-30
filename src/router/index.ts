import { createRouter, createWebHashHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
    },
    {
      path: '/download',
      name: 'download',
      component: () => import('../views/DownloadPage.vue'),
    },
    {
      path: '/support',
      name: 'support',
      component: () => import('../views/SupportPage.vue'),
    },
    {
      path: '/wiki',
      name: 'wiki-home',
      component: () => import('../views/WikiPage.vue'),
    },
    {
      path: '/wiki/:slug',
      name: 'wiki-article',
      component: () => import('../views/WikiArticlePage.vue'),
    },
  ],
})

export default router
