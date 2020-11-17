import Vue from 'vue'
import VueRouter from 'vue-router'
import VueI18n from 'vue-i18n'

// components
import App from './App.vue'
import About from './components/About'
import Home from './components/Home'
import Medieval from './components/Medieval'
import Otoman from './components/Otoman'
// import Habsburg from './components/Habsburg'
// import Austrian from './components/Austrian'
// import Modern from './components/Modern'
import Error404 from './components/generic/Error404'

//directives
import ScrollAnimation from './directives/scroll-animation'

// third party libraries
import AnimateCSS from 'animate.css';
import HoverCSS from 'hover.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import '@mdi/font/css/materialdesignicons.css'

// translations
import { EN_TRANSLATIONS } from './translations/en'
import { RO_TRANSLATIONS } from './translations/ro'

const TRANSLATIONS = {
  en: EN_TRANSLATIONS,
  ro: RO_TRANSLATIONS
}

Vue.use(VueI18n)
Vue.use(AnimateCSS);
Vue.use(HoverCSS);

const i18n = new VueI18n({
  locale: 'ro',
  messages: TRANSLATIONS,
})

library.add(faGlobe, faInstagram, faFacebook)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.directive('scroll-animation', ScrollAnimation)
Vue.prototype.clipboardData = window.clipboardData;

const routes = [
  { 
    path: '/',
    component: Home,
    meta: { title: 'menu.home' }
  },
  {
    path: '/about',
    name: 'about',
    component: About,
    meta: { title: 'menu.about' }
  },
  {
    path: '/home',
    name: 'home',
    component: Home,
    meta: { title: 'menu.home' }
  },
  { 
    path: '/medieval',
    name: 'medieval',
    component: Medieval,
    meta: { title: 'medieval.title' }
  },
  {
    path: '/otoman',
    name: 'otoman',
    component: Otoman,
    meta: { title: 'otoman.title' }
  },
  // { path: '/habsburg', component: Habsburg },
  // { path: '/austrian', component: Austrian },
  // { path: '/modern', component: Modern },
  { 
    path: '*',
    component: Error404,
    name: 'Error404'
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

Vue.use(VueRouter)

router.beforeEach((to, from, next) => {
  document.title = i18n.t(to.meta.title)
  next()
})

Vue.config.productionTip = false

new Vue({
  router,
  i18n,
  render: h => h(App)
}).$mount('#app')
