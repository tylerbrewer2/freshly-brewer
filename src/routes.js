import Home from './containers/Home';
import RSVP from './containers/RSVP';
import Splash from './components/Splash'

const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/splash',
    component: Splash,
  },
  {
    path: '/rsvp',
    component: RSVP,
  }
];

export default routes;
