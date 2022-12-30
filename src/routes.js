import {
  Home,
  About,
  Exhibitions,
  Posts,
  // Tools,
  // Work,
} from './pages';

export default {
  home: { path: '/', name: 'Home', component: Home },
  about: { path: '/about', name: 'About', component: About },
  exhibitions: { path: '/exhibitions', name: 'Exhibitions', component: Exhibitions },
  posts: { path: '/posts', name: 'Posts', component: Posts },
  // tools: { path: '/__tools__', name: 'Tools', component: Tools },
  // work: {path: '/work', name: 'Work', component: Work},
};
