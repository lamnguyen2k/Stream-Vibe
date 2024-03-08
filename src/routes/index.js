import Home from '../pages/Home';
import Support from '../pages/Support';
import Subscriptions from '../pages/Subscriptions';
import MovieAndShow from '../pages/MovieAndShow';
import ShowMovie from '../components/ShowMovie';
import ShowMovieSeason from '../components/ShowMovieSeason';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/support', component: Support },
    { path: '/subscriptions', component: Subscriptions },
    { path: '/movieAndShow', component: MovieAndShow },
    { path: '/showmovie', component: ShowMovie },
    { path: '/showmovieseason', component: ShowMovieSeason },
];

export { publicRoutes };
