import { createRouter, createWebHistory } from 'vue-router'
import { boutique } from '../boutique.js'
import Accueil from '../views/Accueil.vue'
import Articles from '../views/Articles.vue'
import ArticleDetail from '../views/ArticleDetail.vue'
import Ajouter from '../views/Ajouter.vue'
import Login from '../views/Login.vue'
import Admin from '../views/Admin.vue'
import Panier from '../components/Panier.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Accueil },
    { path: '/articles', component: Articles },
    { path: '/article/:id', component: ArticleDetail, props: true },
    { path: '/ajouter', component: Ajouter },
    { path: '/panier', component: Panier },
    { path: '/login', component: Login },
    { path: '/admin', component: Admin, meta: { requiresAuth: true } },
  ],
})

router.beforeEach((to) => {
  if (to.meta.requiresAuth && !boutique.connecte) {
    return '/login'
  }
})

export default router
