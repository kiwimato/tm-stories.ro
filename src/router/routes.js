// components
import About from '../components/About'
import Home from '../components/Home'
const Antiquity = () => import('../components/Antiquity')
const Medieval = () => import('../components/Medieval')
const Otoman = () => import('../components/Otoman')
const Photos = () => import('../components/Photos')
// import Habsburg from '../components/Habsburg'
// import Austrian from '../components/Austrian'
// import Modern from '../components/Modern'

import Error404 from '../components/generic/Error404'

import austroHabsburgRoutes from './austro-habsburg';
import worldWarRoutes from './world-wars';

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
export default routes;