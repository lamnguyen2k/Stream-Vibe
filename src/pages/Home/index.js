import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import CategoryFilm from '../../components/CategoryFilm';
import ListCard from '../../components/ListCard';
import Pricing from '../../components/Pricing';
import Questions from '../../components/Questions';
import axios from './axios';
import imgHome from './images/Container.png';
import iconPlay from './images/IconPlay.png';
import CustomSlider from '../../components/Slick';

function Home() {
    const [ourGenres, setOurGenres] = useState([]);

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
            <CustomSlider titleHome={'Explore our wide variety of categories'} items={ourGenres} slidesToShow={5} />
            <ListCard />
            <Questions />
            <Pricing />
        </div>
    );
}

export default Home;
