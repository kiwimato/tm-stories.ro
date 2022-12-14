// components
const Antiquity = () => import('../components/Antiquity')
const Medieval = () => import('../components/Medieval')
const Otoman = () => import('../components/Otoman')
const Photos = () => import('../components/Photos')
const About = () => import('../components/About')
const Home = () => import('../components/Home')

const Error404 = () => import('../components/generic/Error404')

const austroHabsburgRoutes = require('./austro-habsburg');
const worldWarRoutes = require('./world-wars');

const baseRoutes = [
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
    path: '/antiquity',
    name: 'antiquity',
    component: Antiquity,
    meta: { title: 'antiquity.title' }
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
  {
    path: '/photos',
    name: 'photos',
    component: Photos,
    meta: { title: 'menu.photos' }
  },
  // { path: '/modern', component: Modern },
  { 
    path: '*',
    component: Error404,
    name: 'Error404'
  }
];

const routes = baseRoutes.concat(austroHabsburgRoutes, worldWarRoutes);

module.exports = routes;
