import { createRouter, createWebHistory } from 'vue-router'
import store from '@/store/index.js'
const routes = [
  {
    path: "/",
    name: "homeview",
    component: () => import('../views/HomeView.vue'),
    meta: {
      title: "Panacea",
      requiresLogin: false
    }
  },
  {
    path: '/store',
    name: 'Store',
    component: () => import("../views/Store.vue"),
    meta: {
      title: "Panacea",
      requiresLogin: false
    }
  },
  {
    path: '/Roulette',
    name: 'roulette',
    component: () => import("../views/Roulette.vue"),
    meta: {
      title: "Panacea",
      requiresLogin: true
    }
  },
  {
    path: '/Contacts',
    name: 'contacts',
    component: () => import("../views/Contacts.vue"),
    meta: {
      title: "Panacea",
      requiresLogin: false
    }
  },
  {
    path: '/Privacy',
    name: 'privacy',
    component: () => import("../views/Privacy.vue"),
    meta: {
      title: "Panacea",
      requiresLogin: false
    }
  },
  {
    path: '/Terms',
    name: 'terms',
    component: () => import("../views/Terms.vue"),
    meta: {
      title: "Panacea",
      requiresLogin: false
    }
  }
  ,
  {
    path: '/Profile',
    name: 'profile',
    component: () => import("../views/Profile.vue"),
    meta: {
      title: "Panacea",
      requiresLogin: true,
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresLogin) && store.state.user.auth == false) {
    next({path: '/Terms'})
  } else {
    next()
  }
})
export default router
const DEFAULT_TITLE = 'Panacea';
router.beforeEach((to) => {
  document.title = to.meta.title || DEFAULT_TITLE;
});