import Home from '../pages/Home';
import Support from '../pages/Support';
import Subscriptions from '../pages/Subscriptions';
import MovieAndShow from '../pages/MovieAndShow';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/support', component: Support },
    { path: '/subscriptions', component: Subscriptions },
    { path: '/movieAndShow', component: MovieAndShow },
];

export { publicRoutes };
