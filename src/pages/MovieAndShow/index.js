import imgContainer from './image/Container.png';
import iconPlush from './image/IconPlush.png';
import iconLike from './image/IconLike.png';
import iconSpeake from './image/IconSpeake.png';
import iconPlay from './image/Rectangle.png';
import iconRight from './image/IconRight.png';
import IconLeft from './image/IconLeft.png';
import ShowMovie from '../../components/ShowMovie/index.js';

import imgAction from './image/Containers.png';
import imgAdvanture from './image/Containers1.png';
import imgComedy from './image/Containers2.png';
import imgDrama from './image/Containers3.png';
import imgHorror from './image/Containers4.png';

import imgAction1 from './image/Container (1).png';
import imgComedy3 from './image/Container(6).png';
import imgDrama4 from './image/Container (5).png';
import imgHorror5 from './image/Containers4.png';

import imgfilm1 from './image/Image.png';
import imgfilm2 from './image/Image (1).png';
import imgfilm3 from './image/Image (2).png';
import imgfilm4 from './image/Image (3).png';
import imgfilm5 from './image/Image (4).png';
import iconTime from './image/IconTime.png';
import iconView from './image/IconView.png';

import imgfilm6 from './image/Image (5).png';
import imgfilm7 from './image/Image (6).png';
import imgfilm8 from './image/Image (7).png';
import imgfilm9 from './image/Image (8).png';
import imgfilm10 from './image/Image (9).png';

import imgfilms from './image/Image (10).png';
import iconStart from './image/IconStart.png';

import iconNext from './image/IconLeft.png';

import { NavLink } from 'react-router-dom';
import React, { useRef, useState, useEffect } from 'react';
import axios from './axios.js';

import Slider from 'react-slick';

import CustomSlider from '../../components/Slick/index.js';

function MovieAndShow() {
    const slider = useRef(null);
    const [genres, setGenres] = useState([]);
    const [topRate, setTopRate] = useState([]);
    const [trending, setTrending] = useState([]);
    useEffect(() => {
        axios.get('/3/genre/movie/list').then((res) => {
            setGenres(res.data.genres);
        });
        axios.get('/3/movie/popular').then((res) => {
            setTrending(res.data.results);
        });
        axios.get('/3/movie/top_rated').then((res) => {
            setTopRate(res.data.results);
        });
    });
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

    const PopularTopInGenres = [{ Top10in: 'Top 10 in' }];

    const TrendingNow = [
        { img: imgfilm1, iconTime: iconTime, iconView: iconView, time: '1h 30min', view: '2k', goToShowMovie: true },
        { img: imgfilm2, iconTime: iconTime, iconView: iconView, time: '1h 57min', view: '1.5k', goToShowMovie: true },
        { img: imgfilm3, iconTime: iconTime, iconView: iconView, time: '2h 10min', view: '1.8k', goToShowMovie: true },
        { img: imgfilm4, iconTime: iconTime, iconView: iconView, time: '2h 20min', view: '3k', goToShowMovie: true },
        { img: imgfilm5, iconTime: iconTime, iconView: iconView, time: '1h 40min', view: '5k', goToShowMovie: true },
        { img: imgfilm4, iconTime: iconTime, iconView: iconView, time: '1h min', view: '2k', goToShowMovie: true },
    ];

    const NewReleases = [
        { img: imgfilm6, content: 'Released at ', release: '14 April 2023', goToShowMovie: true },
        { img: imgfilm7, content: 'Released at ', release: '22 April 2023', goToShowMovie: true },
        { img: imgfilm8, content: 'Released at ', release: '13 April 2023', goToShowMovie: true },
        { img: imgfilm9, content: 'Released at ', release: '19 April 2023', goToShowMovie: true },
        { img: imgfilm10, content: 'Released at ', release: '11 April 2023', goToShowMovie: true },
        { img: imgfilm9, content: 'Released at ', release: '14 April 2023', goToShowMovie: true },
    ];

    const MustWatchMovies = [
        {
            img: imgfilms,
            iconTimes: iconTime,
            times: '1h 30min',
            iconStart: iconStart,
            num: '20k',
            goToShowMovie: true,
        },
        {
            img: imgfilms,
            iconTimes: iconTime,
            times: '1h 30min',
            iconStart: iconStart,
            num: '20k',
            goToShowMovie: true,
        },
        {
            img: imgfilms,
            iconTimes: iconTime,
            times: '1h 30min',
            iconStart: iconStart,
            num: '20k',
            goToShowMovie: true,
        },
        {
            img: imgfilms,
            iconTimes: iconTime,
            times: '1h 30min',
            iconStart: iconStart,
            num: '20k',
            goToShowMovie: true,
        },
        {
            img: imgfilms,
            iconTimes: iconTime,
            times: '1h 30min',
            iconStart: iconStart,
            num: '20k',
            goToShowMovie: true,
        },
    ];

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
        <div className="wrapper m-40">
            <Slider {...settings} className="my-10 mx-4">
                <div className="lg:max-w-screen-2xl max-w-screen-full relative mx-auto">
                    <img alt="" src={imgContainer} />
                    <div className="text-center absolute bottom-1">
                        <h1 className="text-3xl font-bold tracking-tight text-white">Avengers : Endgame</h1>

                        <p className="mt-6 lg:flex hidden text-1xl text-balance text-zinc-400">
                            With the help of remaining allies, the Avengers must assemble once more in order to undo
                            Thanos's actions and undo the chaos to the universe, no matter what consequences may be in
                            store, and no matter who they face... Avenge the fallen.
                        </p>
                        <div className="mt-2 flex items-center justify-center gap-x-6">
                            <NavLink to="#" className="rounded-md flex px-3.5 py-2.5 text-sm font-semibold text-white">
                                <button className="flex bg-red-600 px-4 py-3 rounded-lg justify-center mx-3">
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
                <div className="max-w-screen-2xl  relative mx-auto">
                    <img alt="" src={imgContainer} />
                    <div className="text-center absolute bottom-1">
                        <h1 className="text-3xl font-bold tracking-tight text-white">Avengers : Endgame</h1>

                        <p className="mt-6 lg:flex hidden text-1xl text-balance text-zinc-400">
                            With the help of remaining allies, the Avengers must assemble once more in order to undo
                            Thanos's actions and undo the chaos to the universe, no matter what consequences may be in
                            store, and no matter who they face... Avenge the fallen.
                        </p>
                        <div className="mt-2 flex items-center justify-center gap-x-6">
                            <NavLink to="#" className="rounded-md flex px-3.5 py-2.5 text-sm font-semibold text-white">
                                <button className="flex bg-red-600 px-4 py-3 rounded-lg justify-center mx-3">
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
                        items={genres}
                        slidesToShow={4}
                        top10in={'Top 10 in'}
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
                    <CustomSlider title={'Our Genres'} items={genres} slidesToShow={5} />

                    <CustomSlider
                        className="rel"
                        title={'Popular Top 10 In Genres'}
                        items={genres}
                        slidesToShow={4}
                        top10in={'Top 10 in'}
                    />
                    <CustomSlider title={'Trending Now'} items={trending} slidesToShow={5} goToShowMovie={false} />
                    <CustomSlider title={'New Releases'} items={topRate} slidesToShow={5} goToShowMovie={false} />
                    <CustomSlider
                        title={'Must - Watch Movies'}
                        items={topRate}
                        slidesToShow={4}
                        goToShowMovie={false}
                    />
                </div>
            </div>
        </div>
    );
}

export default MovieAndShow;
