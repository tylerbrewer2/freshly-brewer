import Home from './containers/Home';
import RSVP from './containers/RSVP';
import Details from './containers/Details';
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
  },
  {
    path: '/details',
    component: Details,
  }
];

export default routes;
