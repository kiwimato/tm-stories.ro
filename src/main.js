import Vue from 'vue'
import VueRouter from 'vue-router'
import VueI18n from 'vue-i18n'
import * as routes from './router/routes.js'
import { Buffer } from 'buffer';

// @ts-ignore
window.Buffer = Buffer;

//components
import App from './App.vue'

//directives
import ScrollAnimation from './directives/scroll-animation'

// third party libraries
import AnimateCSS from 'animate.css'
import HoverCSS from 'hover.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faGlobe, faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// translations
import { EN_TRANSLATIONS } from './translations/en'
import { RO_TRANSLATIONS } from './translations/ro'

const TRANSLATIONS = {
  en: EN_TRANSLATIONS,
  ro: RO_TRANSLATIONS
}

Vue.use(VueI18n)
Vue.use(AnimateCSS)
Vue.use(HoverCSS)

const i18n = new VueI18n({
  locale: 'ro',
  messages: TRANSLATIONS,
})

library.add(faGlobe, faChevronLeft, faInstagram, faFacebook)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.directive('scroll-animation', ScrollAnimation)
Vue.prototype.clipboardData = window.clipboardData;

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
