import WorldWars from '../components/WorldWars/WorldWars'
const WWStory1 = () => import('../components/WorldWars/stories/Story1')
const WWStory2 = () => import('../components/WorldWars/stories/Story2')
const WWStory3 = () => import('../components/WorldWars/stories/Story3')

export default [{
  path: '/world-wars',
  name: 'world-wars',
  component: WorldWars,
  meta: { title: 'worldWars.title' },
},{
  path: '/world-wars/story1',
  component: WWStory1,
  meta: { title: 'worldWars.stories.story1.title' }
},{
  path: '/world-wars/story2',
  component: WWStory2,
  meta: { title: 'worldWars.stories.story2.title' }
}, {
  path: '/world-wars/story3',
  component: WWStory3,
  meta: { title: 'worldWars.stories.story3.title' }
}]