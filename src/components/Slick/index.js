import React, { useRef, useState } from 'react';
import Slider from 'react-slick';
import { NavLink } from 'react-router-dom';

import iconPrev from './image/IconPrev.png';
import iconNext from './image/IconNext.png';

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
        autoplay: true,
        autoplaySpeed: 5000,
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
            <div className="my-20">
                <div className="flex justify-between mx-6 lg:mb-12 my-10">
                    <div className="">
                        <h2 className="mb-4 text-3xl tracking-tight font-semibold">{props.title}</h2>
                    </div>

                    <div
                        className="flex bg-black rounded-lg px-2 py-2 border border-zinc-700 "
                        style={{ textAlign: 'center' }}
                    >
                        <button onClick={handlePrev} className="hidden lg:flex">
                            <img
                                className="px-2 py-2 rounded-lg bg-zinc-700 active:bg-zinc-800"
                                alt=""
                                src={iconPrev}
                            />
                        </button>
                        <div className="flex items-center mx-1 hidden lg:flex">
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
                                className="px-2 py-2 rounded-lg bg-zinc-700 active:bg-zinc-800"
                                alt=""
                                src={iconNext}
                            />
                        </button>
                    </div>
                </div>
                <Slider {...settings} className="my-10 mx-4">
                    {props.items.map((value, index) => {
                        return (
                            <div
                                key={index}
                                className="cursor-pointer flex-col p-6 mx-auto max-w-lg  rounded-lg bg-zinc-800 xl:p-8 dark:bg-gray-800 "
                            >
                                <img className="" alt="" src={value.img} />
                                <div>
                                    {value.Top10in && (
                                        <span className="px-2 py-1 bg-red-600 rounded-lg">{value.Top10in}</span>
                                    )}
                                </div>
                                <div className="">
                                    {value.iconTime && (
                                        <div className="flex justify-between mt-3 ">
                                            <div className="flex bg-zinc-900 border border-zinc-600 px-2 py-1 rounded-xl">
                                                <img className="w-6 h-6 mr-1" alt="" src={value.iconTime} />
                                                <span>{value.time}</span>
                                            </div>
                                            <div className="flex bg-zinc-900 border border-zinc-600 px-2 py-1 rounded-xl">
                                                <img className="w-6 h-6 mr-1" alt="" src={value.iconView} />
                                                <span>{value.view}</span>
                                            </div>
                                        </div>
                                    )}
                                </div>
                                <div className="">
                                    {value.release && (
                                        <div className="flex justify-center mt-2 bg-zinc-900 border border-zinc-600 px-2 py-1 rounded-xl">
                                            <span className="text-zinc-400 mr-1">{value.content}</span>
                                            <span>{value.release}</span>
                                        </div>
                                    )}
                                </div>
                                <div className="">
                                    {value.num && (
                                        <div className="flex justify-between mt-3 ">
                                            <div className="flex bg-zinc-900 border border-zinc-600 px-2 py-1 rounded-xl">
                                                <img className="w-6 h-6 mr-1" alt="" src={value.iconTimes} />
                                                <span>{value.times}</span>
                                            </div>
                                            <div className="flex item-center bg-zinc-900 border border-zinc-600 px-2 py-1 rounded-xl">
                                                <img className="w-21 h-5 mr-1" alt="" src={value.iconStart} />
                                                <span>{value.num}</span>
                                            </div>
                                        </div>
                                    )}
                                </div>
                                <div className="flex justify-between py-1">
                                    <p>{value.title}</p>
                                    <NavLink to="" className="flex justify-center text-sm font-semibold text-white">
                                        <img alt="" src={value.iconShows} />
                                    </NavLink>
                                </div>
                            </div>
                        );
                    })}
                </Slider>
            </div>
        </div>
    );
};

export default CustomSlider;
