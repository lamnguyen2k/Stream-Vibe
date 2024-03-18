import React, { useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Slider from 'react-slick';
import imgFilm from './image/Containers.png';
import { default as iconNext, default as iconNexts } from './image/IconLeft.png';
import iconPrev from './image/IconRight.png';

function CategoryFilm(props) {
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
                    slidesToShow: 5,
                    slidesToScroll: 5,
                },
            },
            {
                breakpoint: 1008,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
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
                        <h2 className="mb-4 text-3xl tracking-tight font-semibold">
                            Explore our wide variety of categories
                        </h2>
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
                                className=" flex-col p-6 mx-auto max-w-lg  rounded-lg bg-zinc-800 xl:p-8 dark:bg-gray-800 "
                            >
                                <img className="" alt="" src={imgFilm} />
                                <div className="flex justify-between py-1">
                                    <p>{value.name}</p>
                                    <NavLink to="#" className="flex justify-center text-sm font-semibold text-white">
                                        <img alt="" src={iconNexts} />
                                    </NavLink>
                                </div>
                            </div>
                        );
                    })}
                </Slider>
            </div>
        </div>
    );
}

export default CategoryFilm;
