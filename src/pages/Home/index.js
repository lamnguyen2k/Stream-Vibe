import imgHome from './images/Container.png';
import iconPlay from './images/IconPlay.png';
import Pricing from '../../components/Pricing';
import ListCard from '../../components/ListCard';
import Questions from '../../components/Questions';
import CategoryFilm from '../../components/CategoryFilm';
import imgAction from './images/Containers.png';
import imgAdvanture from './images/Containers1.png';
import imgComedy from './images/Containers2.png';
import imgDrama from './images/Containers3.png';
import imgHorror from './images/Containers4.png';
import iconNext from './images/IconLeft.png';
import axios from './axios';
import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';

function Home() {
    const [ourGenres, setOurGenres] = useState([]);
    const OurGenres = [
        { title: 'Action', img: imgAction, iconShows: iconNext },
        { title: 'Adventure', img: imgAdvanture, iconShows: iconNext },
        { title: 'Comedy', img: imgComedy, iconShows: iconNext },
        { title: 'Drama', img: imgDrama, iconShows: iconNext },
        { title: 'Horror', img: imgHorror, iconShows: iconNext },
        { title: 'Horror', img: imgHorror, iconShows: iconNext },
        { title: 'Horror', img: imgHorror, iconShows: iconNext },
        { title: 'Horror', img: imgHorror, iconShows: iconNext },
        { title: 'Horror', img: imgHorror, iconShows: iconNext },
    ];
    useEffect(() => {
        axios.get('/3/genre/movie/list').then((res) => {
            setOurGenres(res.data.genres);
        });
    });

    return (
        <div className="wrapper">
            <div className="">
                <img alt="" src={imgHome} />
            </div>
            <div className="mx-auto max-w-6xl -mt-10">
                <div className="text-center">
                    <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                        The Best Streaming Experience
                    </h1>
                    <p className="mt-6 text-lg leading-8 text-zinc-400">
                        StreamVibe is the best streaming experience for watching your favorite movies and shows on
                        demand, anytime, anywhere. With StreamVibe, you can enjoy a wide variety of content, including
                        the latest blockbusters, classic movies, popular TV shows, and more. You can also create your
                        own watchlists, so you can easily find the content you want to watch.
                    </p>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <NavLink to="#" className="rounded-md px-3.5 py-2.5 text-sm font-semibold text-white">
                            <button className="flex bg-red-600 px-5 py-3 rounded-lg justify-center ">
                                <img alt="" src={iconPlay} />
                                <span className="mx-2 font-semibold">Start Watching Now</span>
                            </button>
                        </NavLink>
                    </div>
                </div>
            </div>
            <CategoryFilm items={ourGenres} slidesToShow={5} />
            <ListCard />
            <Questions />
            <Pricing />
        </div>
    );
}

export default Home;
