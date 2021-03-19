import Contact from '../pages/Contact';
import Home from '../pages/Home';

const routes = [
  {
    path: '/',
    component: Home,
    exact: true,
  },
  {
    path: '/contact',
    component: Contact,
    exact: true,
  },
];

export default routes;
