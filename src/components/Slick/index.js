import React, { useRef, useState } from 'react';
import Slider from 'react-slick';
import { NavLink } from 'react-router-dom';
// import ShowMovie from '../ShowMovie';
import img from './image/Container (1).png';
import iconPrev from './image/IconPrev.png';
import iconNext from './image/IconNext.png';
import iconTime from './image/IconTime.png';
import iconView from './image/IconView.png';
import GetFileUrl from '../../libs';

import { Rating } from 'react-simple-star-rating';

const CustomSlider = (props) => {
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
        // autoplay: true,
        // autoplaySpeed: 5000,
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
                    slidesToShow: 1,
                    slidesToScroll: 1,
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
            <div className="my-20">
                <div className="lg:flex lg:justify-between mx-6 lg:mb-12 my-10">
                    <div className="">
                        {props.titleHome && (
                            <h2 className="mb-4 text-3xl tracking-tight font-semibold">
                                Explore our wide variety of categories
                            </h2>
                        )}
                        <h2 className="mb-4 text-3xl tracking-tight font-semibold">{props.title}</h2>
                    </div>

                    <div
                        className="flex lg:bg-black rounded-lg px-2 py-2 lg:border lg:border-zinc-700"
                        style={{ textAlign: 'center' }}
                    >
                        <button onClick={handlePrev} className="hidden lg:flex">
                            <img
                                className="px-2 py-2 rounded-lg bg-zinc-700 active:bg-zinc-800"
                                alt=""
                                src={iconPrev}
                            />
                        </button>
                        <div className="flex items-center">
                            {dots.map((dot, index) => (
                                <div
                                    key={index}
                                    className={` h-0.5 w-5 bg-zinc-700 lg:ml-0.5 inline-block cursor-pointer ${
                                        index === activeDot ? 'actives' : ''
                                    }`}
                                    onClick={() => handleDotClick(index)}
                                ></div>
                            ))}
                        </div>
                        <button onClick={handleNext} className="hidden lg:flex">
                            <img
                                className="px-2 py-2 rounded-lg bg-zinc-700 active:bg-zinc-800"
                                alt=""
                                src={iconNext}
                            />
                        </button>
                    </div>
                </div>
                <Slider {...settings} className="my-10 mx-4">
                    {props?.items.map((value, index) => {
                        let num = 0;
                        if (value.vote_count > 1000) {
                            num = (value.vote_count / 1000).toFixed(0) + 'k';
                        }
                        if (value.vote_count < 1000) {
                            num = value.vote_count;
                        }
                        let roundedNumber = Math.floor(value.vote_average / 2);
                        return (
                            <div
                                key={index}
                                className="cursor-pointer flex-col p-6 mx-auto max-w-lg  rounded-lg bg-zinc-800 xl:p-8 dark:bg-gray-800 "
                            >
                                {!value.backdrop_path && <img className="" alt="no img" src={img} />}
                                {value.backdrop_path && (
                                    <NavLink
                                        to={
                                            props.goToShowMovie
                                                ? `/showmovie/${value.id}`
                                                : `/showmovieseason/${value.id}`
                                        }
                                    >
                                        <img className="" alt="" src={GetFileUrl(value.poster_path, 'w342')} />
                                    </NavLink>
                                )}

                                <div>
                                    {props.top10in && (
                                        <div className="">
                                            <span className="px-2 py-1 bg-red-600 rounded-lg">Top 10 In</span>
                                        </div>
                                    )}
                                </div>
                                <div className="">
                                    {props.vote && (
                                        <div className="flex justify-between mt-3">
                                            <div className="flex bg-zinc-900 border border-zinc-600 px-2 py-1 rounded-xl">
                                                <img className="w-6 h-6 mr-1" alt="" src={iconTime} />
                                                <span>2h 45 min</span>
                                            </div>
                                            <div className="flex bg-zinc-900 border border-zinc-600 px-2 py-1 rounded-xl">
                                                <img className="w-6 h-6 mr-1" alt="" src={iconView} />
                                                <span className="text-white">{value.vote_count}</span>
                                            </div>
                                        </div>
                                    )}
                                </div>
                                <div className="">
                                    {props.released && (
                                        <div className="flex justify-center mt-2 bg-zinc-900 border border-zinc-600 px-2 py-1 rounded-xl">
                                            <span className="text-zinc-400 mr-1">Released at</span>
                                            <span>{value.release_date}</span>
                                            <span>{value.first_air_date}</span>
                                        </div>
                                    )}
                                </div>
                                <div className="">
                                    {props.voteCount && (
                                        <div className="flex justify-between mt-3">
                                            <div className="flex bg-zinc-900 border border-zinc-600 px-2 py-1 rounded-xl">
                                                <img className="w-6 h-6 mr-1" alt="" src={iconTime} />
                                                <span>2 h 45 min</span>
                                            </div>
                                            <div className="flex justify-center items-center bg-zinc-900 border border-zinc-600 px-2 py-1 rounded-xl">
                                                <Rating
                                                    size={20}
                                                    transition={true}
                                                    readonly={true}
                                                    fillColor={'#ff0000'}
                                                    initialValue={roundedNumber}
                                                    SVGstyle={{
                                                        display: 'inline',
                                                        marginTop: -8,
                                                    }}
                                                />

                                                <span className="">{num}</span>
                                            </div>
                                        </div>
                                    )}
                                </div>
                                {!value.original_name && (
                                    <div className="flex justify-between py-1">
                                        <p>{value.name}</p>
                                        <NavLink to="" className="flex justify-center text-sm font-semibold text-white">
                                            <img alt="" src={value.iconShows} />
                                        </NavLink>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </Slider>
            </div>
        </div>
    );
};

export default CustomSlider;
