import React, { useRef, useState } from 'react';
import Slider from 'react-slick';
import { NavLink } from 'react-router-dom';
import imgAction from './image/Container (3).png';

import imgAdvanture from './image/Container (1).png';
import imgComedy from './image/Container (3).png';
import imgDrama from './image/Container (6).png';

import iconPrev from './image/IconPrev.png';
import iconNext from './image/IconNext.png';

const Popular = () => {
    const slider = useRef(null);
    const dots = [0, 1, 2, 3];
    const [activeDot, setActiveDot] = useState(0);

    const settings = {
        dots: false,
        infinite: true,
        arrows: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        ref: slider,
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
                        <h2 className="mb-4 text-3xl tracking-tight font-semibold">Popular Top 10 In Genres</h2>
                    </div>

                    <div
                        className="flex bg-black rounded-lg px-2 py-2 border border-zinc-700 "
                        style={{ textAlign: 'center' }}
                    >
                        <button onClick={handlePrev}>
                            <img
                                className="px-2 py-2 rounded-lg bg-zinc-700 active:bg-zinc-800"
                                alt=""
                                src={iconPrev}
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
                        <button onClick={handleNext}>
                            <img
                                className="px-2 py-2 rounded-lg bg-zinc-700 active:bg-zinc-800"
                                alt=""
                                src={iconNext}
                            />
                        </button>
                    </div>
                </div>
                <Slider {...settings} className="my-10 mx-4">
                    <div className=" flex-col p-6 mx-auto max-w-lg  rounded-lg bg-zinc-800 xl:p-8 dark:bg-gray-800 ">
                        <img className="" alt="" src={imgAction} />
                        <div className="flex justify-between py-1">
                            <p>Action</p>
                            <NavLink to="#" className="flex justify-center text-sm font-semibold text-white">
                                <img alt="" src={iconNext} />
                            </NavLink>
                        </div>
                    </div>
                    <div className=" flex-col p-6 mx-auto max-w-lg  rounded-lg bg-zinc-800 xl:p-8 dark:bg-gray-800 ">
                        <img className="" alt="" src={imgAdvanture} />
                        <div className="flex justify-between py-1">
                            <p>Action</p>
                            <NavLink to="#" className="flex justify-center text-sm font-semibold text-white">
                                <img alt="" src={iconNext} />
                            </NavLink>
                        </div>
                    </div>
                    <div className=" flex-col p-6 mx-auto max-w-lg  rounded-lg bg-zinc-800 xl:p-8 dark:bg-gray-800 ">
                        <img className="" alt="" src={imgComedy} />
                        <div className="flex justify-between py-1">
                            <p>Action</p>
                            <NavLink to="#" className="flex justify-center text-sm font-semibold text-white">
                                <img alt="" src={iconNext} />
                            </NavLink>
                        </div>
                    </div>
                    <div className=" flex-col p-6 mx-auto max-w-lg  rounded-lg bg-zinc-800 xl:p-8 dark:bg-gray-800 ">
                        <img className="" alt="" src={imgDrama} />
                        <div className="flex justify-between py-1">
                            <p>Action</p>
                            <NavLink to="#" className="flex justify-center text-sm font-semibold text-white">
                                <img alt="" src={iconNext} />
                            </NavLink>
                        </div>
                    </div>
                    <div className=" flex-col p-6 mx-auto max-w-lg  rounded-lg bg-zinc-800 xl:p-8 dark:bg-gray-800 ">
                        <img className="" alt="" src={imgDrama} />
                        <div className="flex justify-between py-1">
                            <p>Action</p>
                            <NavLink to="#" className="flex justify-center text-sm font-semibold text-white">
                                <img alt="" src={iconNext} />
                            </NavLink>
                        </div>
                    </div>
                </Slider>
            </div>
        </div>
    );
};

export default Popular;
