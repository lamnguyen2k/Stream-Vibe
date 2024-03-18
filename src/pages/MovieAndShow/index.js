import imgContainer from './image/Container.png';
import iconPlush from './image/IconPlush.png';
import iconLike from './image/IconLike.png';
import iconSpeake from './image/IconSpeake.png';
import iconPlay from './image/Rectangle.png';
import iconRight from './image/IconRight.png';
import IconLeft from './image/IconLeft.png';
import { NavLink } from 'react-router-dom';
import React, { useRef, useState, useEffect, createContext } from 'react';
import axios from './axios.js';
import Slider from 'react-slick';
import CustomSlider from '../../components/Slick/index.js';

const DataContext = createContext();

function MovieAndShow() {
    const slider = useRef(null);

    // Movies
    const [genres, setGenres] = useState([]);
    const [topRate, setTopRate] = useState([]);
    const [trending, setTrending] = useState([]);

    // TV Shows
    const [genresTvShow, setGenresTvShow] = useState([]);
    const [topRateTvShow, setTopRateTvShow] = useState([]);
    const [trendingTvShow, setTrendingTvShow] = useState([]);

    useEffect(() => {
        // API Movies
        axios.get('/3/genre/movie/list').then((res) => {
            setGenres(res.data.genres);
        });
        axios.get('/3/movie/popular').then((res) => {
            setTrending(res.data.results);
        });
        axios.get('/3/movie/top_rated').then((res) => {
            setTopRate(res.data.results);
        });

        // API TV Shows

        axios.get('/3/genre/tv/list').then((res) => {
            setGenresTvShow(res.data.genres);
        });
        axios.get('/3/tv/popular').then((res) => {
            setTrendingTvShow(res.data.results);
        });
        axios.get('/3/tv/top_rated').then((res) => {
            setTopRateTvShow(res.data.results);
        });
    });

    const settings = {
        dots: false,
        infinite: true,
        arrows: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        ref: slider,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 1008,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    const handlePrev = () => {
        slider.current.slickPrev();
    };

    const handleNext = () => {
        slider.current.slickNext();
    };

    return (
        <DataContext.Provider value={{ genres, trending, topRate }}>
            <div className="wrapper m-40">
                <Slider {...settings} className="my-10 mx-4">
                    <div className="lg:max-w-screen-2xl max-w-screen-full relative mx-auto">
                        <img alt="" src={imgContainer} />
                        <div className="text-center absolute bottom-1">
                            <h1 className="text-3xl font-bold tracking-tight text-white">Avengers : Endgame</h1>

                            <p className="mt-6 lg:flex hidden text-1xl text-balance text-zinc-400">
                                With the help of remaining allies, the Avengers must assemble once more in order to undo
                                Thanos's actions and undo the chaos to the universe, no matter what consequences may be
                                in store, and no matter who they face... Avenge the fallen.
                            </p>
                            <div className="mt-2 flex items-center justify-center gap-x-6">
                                <NavLink
                                    to="#"
                                    className="rounded-md flex items-center justify-center px-3.5 py-2.5 text-sm font-semibold text-white"
                                >
                                    <button className="flex items-center bg-red-600 px-4 py-3 rounded-lg justify-center mx-3">
                                        <img alt="" src={iconPlay} />
                                        <span className="flex mx-2 font-semibold">Play Now</span>
                                    </button>
                                    <button className="bg-black rounded-lg px-3 py-3">
                                        <img alt="" src={iconPlush} />
                                    </button>
                                    <button className="bg-black rounded-lg px-3 py-3 mx-2">
                                        <img alt="" src={iconLike} />
                                    </button>
                                    <button className="bg-black rounded-lg px-3 py-3">
                                        <img alt="" src={iconSpeake} />
                                    </button>
                                </NavLink>
                            </div>
                            <div className="flex justify-between mx-6 my-2">
                                <button onClick={handlePrev} className="hidden lg:flex">
                                    <img
                                        className="px-2 py-2 rounded-lg bg-black active:bg-zinc-900"
                                        alt=""
                                        src={iconRight}
                                    />
                                </button>

                                <button onClick={handleNext} className="hidden lg:flex">
                                    <img
                                        className="px-2 py-2 rounded-lg bg-black active:bg-zinc-900"
                                        alt=""
                                        src={IconLeft}
                                    />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="max-w-screen-2xl  relative mx-auto">
                        <img alt="" src={imgContainer} />
                        <div className="text-center absolute bottom-1">
                            <h1 className="text-3xl font-bold tracking-tight text-white">Avengers : Endgame</h1>

                            <p className="mt-6 lg:flex hidden text-1xl text-balance text-zinc-400">
                                With the help of remaining allies, the Avengers must assemble once more in order to undo
                                Thanos's actions and undo the chaos to the universe, no matter what consequences may be
                                in store, and no matter who they face... Avenge the fallen.
                            </p>
                            <div className="mt-2 flex items-center justify-center gap-x-6">
                                <NavLink
                                    to="#"
                                    className="rounded-md flex px-3.5 py-2.5 text-sm font-semibold text-white"
                                >
                                    <button className="flex items-center justify-center bg-red-600 px-4 py-3 rounded-lg  mx-3">
                                        <img alt="" src={iconPlay} />
                                        <span className="mx-2 font-semibold">Play Now</span>
                                    </button>
                                    <button className="bg-black rounded-lg px-3 py-3">
                                        <img alt="" src={iconPlush} />
                                    </button>
                                    <button className="bg-black rounded-lg px-3 py-3 mx-2">
                                        <img alt="" src={iconLike} />
                                    </button>
                                    <button className="bg-black rounded-lg px-3 py-3">
                                        <img alt="" src={iconSpeake} />
                                    </button>
                                </NavLink>
                            </div>
                            <div className="flex justify-between mx-6 my-2">
                                <button onClick={handlePrev} className="hidden lg:flex">
                                    <img
                                        className="px-2 py-2 rounded-lg bg-black active:bg-zinc-900"
                                        alt=""
                                        src={iconRight}
                                    />
                                </button>

                                <button onClick={handleNext} className="hidden lg:flex">
                                    <img
                                        className="px-2 py-2 rounded-lg bg-black active:bg-zinc-900"
                                        alt=""
                                        src={IconLeft}
                                    />
                                </button>
                            </div>
                        </div>
                    </div>
                </Slider>

                <div className="max-w-screen-2xl mx-auto my-20 ">
                    <div className="border relative border-zinc-700 rounded-md">
                        <span className="title absolute  left-6 -top-4 px-3 py-1 bg-red-600 rounded-md">Movies</span>
                        <CustomSlider title={'Our Genres'} items={genres} slidesToShow={5} />
                        <CustomSlider
                            className="rel"
                            title={'Popular Top 10 In Genres'}
                            items={trending}
                            slidesToShow={4}
                            top10in={'Top 10 in'}
                            goToShowMovie={true}
                        />
                        <CustomSlider
                            title={'Trending Now'}
                            items={trending}
                            slidesToShow={5}
                            goToShowMovie={true}
                            vote={true}
                        />
                        <CustomSlider
                            title={'New Releases'}
                            items={topRate}
                            slidesToShow={5}
                            goToShowMovie={true}
                            released={'Released'}
                        />
                        <CustomSlider
                            title={'Must - Watch Movies'}
                            items={topRate}
                            voteCount={true}
                            slidesToShow={4}
                            goToShowMovie={true}
                        />
                    </div>
                </div>
                <div className="max-w-screen-2xl mx-auto my-20 ">
                    <div className="border relative border-zinc-700 rounded-md">
                        <span className="title absolute  left-6 -top-4 px-3 py-1 bg-red-600 rounded-md">Shows</span>
                        <CustomSlider title={'Our Genres'} items={genresTvShow} slidesToShow={5} />

                        <CustomSlider
                            title={'Popular Top 10 In Genres'}
                            items={trendingTvShow}
                            slidesToShow={4}
                            top10in={'Top 10 in'}
                        />
                        <CustomSlider title={'Trending Now'} items={trendingTvShow} slidesToShow={5} vote={true} />
                        <CustomSlider
                            title={'New Releases'}
                            items={topRateTvShow}
                            slidesToShow={5}
                            released={'Released'}
                        />
                        <CustomSlider
                            title={'Must - Watch Movies'}
                            items={topRateTvShow}
                            slidesToShow={4}
                            voteCount={true}
                        />
                    </div>
                </div>
            </div>
        </DataContext.Provider>
    );
}

export default MovieAndShow;
