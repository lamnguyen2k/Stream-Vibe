import React, { useRef, useState } from 'react';
import Slider from 'react-slick';
import { NavLink } from 'react-router-dom';

import iconPrev from './image/IconPrev.png';
import iconNext from './image/IconNext.png';

const MovieSlick = (props) => {
    const slider = useRef(null);
    const [activeDot, setActiveDot] = useState(0);

    const dots = [];
    const itemLength = props.items.length;
    for (let i = 0; i <= itemLength - 1; i++) {
        dots[i] = i += 4;
    }

    const settings = {
        dots: false,
        infinite: true,
        arrows: false,
        slidesToShow: props.slidesToShow,
        slidesToScroll: 5,
        ref: slider,

        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 1008,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
        ],
        beforeChange: (current, next) => {
            setActiveDot(next);
        },
    };

    const handleDotClick = (index) => {
        slider.current.slickGoTo(index);
    };

    const handlePrev = () => {
        slider.current.slickPrev();
    };

    const handleNext = () => {
        slider.current.slickNext();
    };

    return (
        <div className="max-w-screen-2xl mx-auto">
            <Slider {...settings} className="my-10 mx-4">
                <div className="max-w-screen-2xl  relative mx-auto">
                    {/* <img alt="" src=} /> */}
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
                            <div className="flex items-center mx-1">
                                {dots.map((dot, index) => (
                                    <div
                                        key={index}
                                        className={`dot ${index === activeDot ? 'actives' : ''}`}
                                        onClick={() => handleDotClick(index)}
                                    ></div>
                                ))}
                            </div>
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
                            <div className="flex items-center mx-1">
                                {dots.map((dot, index) => (
                                    <div
                                        key={index}
                                        className={`dot ${index === activeDot ? 'actives' : ''}`}
                                        onClick={() => handleDotClick(index)}
                                    ></div>
                                ))}
                            </div>
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
        </div>
    );
};

export default MovieSlick;
