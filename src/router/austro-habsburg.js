import WorldWars from '../components/Austro-Habsburg/Austro-Habsburg'
const ahStory1 = () => import('../components/Austro-Habsburg/stories/Story1')
const ahStory2 = () => import('../components/Austro-Habsburg/stories/Story2')

export default [{
  path: '/austro-habsburg',
  name: 'austro-habsburg',
  component: WorldWars,
  meta: { title: 'ah.title' },
},{
  path: '/austro-habsburg/story1',
  component: ahStory1,
  meta: { title: 'ah.stories.story1.title' }
},{
  path: '/austro-habsburg/story2',
  component: ahStory2,
  meta: { title: 'ah.stories.story2.title' }
}]