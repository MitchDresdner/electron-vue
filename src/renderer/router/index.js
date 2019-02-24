import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'landing-page',
    component: require('@/components/LandingPage').default
  },
  {
    path: '/sandybox',
    name: 'sandybox-page',
    component: require('@/components/SandboxPage').default
  },
  {
    path: '/table',
    name: 'table-page',
    component: require('@/components/TablePage').default
  },
  {
    path: '/about',
    name: 'about-page',
    component: require('@/components/AboutPage').default
  },
  {
    path: '*',
    redirect: '/'
  }
  ]
})
