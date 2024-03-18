import imgContainer from './image/Container.png';
import iconPlush from './image/IconPlush.png';
import iconLike from './image/IconLike.png';
import iconSpeake from './image/IconSpeake.png';
import iconPlay from './image/Rectangle.png';
import iconRight from './image/IconRight.png';
import IconLeft from './image/IconLeft.png';
import avatar from './image/people.png';
import iconStar from './image/IconStart.png';
import { useState, useRef, useEffect } from 'react';
import axios from './axios.js';

import star5 from './image/Star 5.png';
import Cast from '../../Cast';

import { NavLink, useParams } from 'react-router-dom';
import Slider from 'react-slick';

import vector from './image/Vector.png';
import vector1 from './image/Vector (1).png';
import vector2 from './image/Vector (2).png';
import { Rating } from 'react-simple-star-rating';

import GetFileUrl from '../../libs.js';

export default function MovieDetail() {
    const { id } = useParams();
    const [data, setData] = useState(null);
    const [comment, setComment] = useState(null);
    const [credit, setCredit] = useState(null);

    useEffect(() => {
        axios.get(`/3/movie/${id}`).then((res) => {
            setData(res.data);
        });
        axios.get(`/3/movie/${id}/reviews`).then((res) => {
            setComment(res.data.results);
        });
        axios.get(`/3/movie/${id}/credits`).then((res) => {
            setCredit(res.data);
        });
    }, [id]);

    const slider = useRef(null);
    const [activeDot, setActiveDot] = useState(0);
    const dots = [];
    const itemLength = comment?.length;
    for (let i = 0; i <= itemLength - 1; i++) {
        dots[i] = i += 1;
    }
    const settings = {
        dots: false,
        infinite: true,
        arrows: false,
        slidesToShow: 2,
        slidesToScroll: 2,
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
        <div className="wrapper max-w-screen-2xl mx-auto mt-40 full-screen">
            <div className="max-w-screen-2xl full-screen relative mx-auto">
                <img alt="" src={GetFileUrl(data?.backdrop_path, 'original')} />
                <div className="text-center absolute bottom-1">
                    <h1 className="text-3xl font-bold tracking-tight text-white">{data?.original_title}</h1>

                    <p className="mt-6 lg:flex hidden text-1xl text-balance text-zinc-400">
                        With the help of remaining allies, the {data?.original_title} must assemble once more in order
                        to undo Thanos's actions and undo the chaos to the universe, no matter what consequences may be
                        in store, and no matter who they face... Avenge the fallen.
                    </p>
                    <div className="mt-2 flex items-center justify-center gap-x-6">
                        <NavLink to="#" className="rounded-md flex px-3.5 py-2.5 text-sm font-semibold text-white">
                            <button className="flex items-center bg-red-600 px-4 py-3 rounded-lg justify-center mx-3">
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
                </div>
            </div>

            <div>
                <div className="flex mt-10 grid grid-cols-1 lg:grid lg:grid-cols-3 gap-x-5">
                    <div className="col-span-2 lg:order-first order-last">
                        <div className="flex flex-col bg-zinc-800 rounded-lg">
                            <span className="mt-10 ml-10 text-zinc-400">Description</span>
                            <span className="ml-10 mt-2 mb-8 ">
                                A fiery young man clashes with an unflinching forest officer in a south Indian village
                                where spirituality, fate and folklore rule the lands.
                            </span>
                        </div>
                        <Cast />

                        <div className="flex flex-col bg-zinc-800 rounded-lg mt-5">
                            <div className="flex justify-between ml-10 my-10">
                                <span className="text-zinc-400">Reviews</span>
                                <button className="mr-3 border border-zinc-500 bg-zinc-950 px-2 py-2  rounded-lg">
                                    <span className="text-zinc-200 ">+ Add Your Review</span>
                                </button>
                            </div>
                            <Slider {...settings}>
                                {comment?.map((value, index) => {
                                    let rating = 0;
                                    if (value.author_details.rating > 5) {
                                        rating = Math.floor(value.author_details.rating / 2);
                                    }
                                    if (value.author_details.rating <= 5) {
                                        rating = value.author_details.rating;
                                    }
                                    return (
                                        <div
                                            key={index}
                                            className="p-3 mx-auto bg-zinc-950  h-96 overflow-y-auto scrollbar-thin scrollbar-thumb-zinc-500 scrollbar-track-zinc-300 rounded-lg"
                                        >
                                            <div className="flex justify-between mb-5">
                                                <div className="flex flex-col">
                                                    <span>{value.author_details.username}</span>
                                                    <span className="text-zinc-500">American</span>
                                                </div>
                                                <div className="flex justify-center items-center bg-zinc-900 px-3 rounded-xl border border-zinc-600">
                                                    <Rating
                                                        size={20}
                                                        transition={true}
                                                        readonly={true}
                                                        fillColor={'#ff0000'}
                                                        initialValue={rating}
                                                        SVGstyle={{
                                                            display: 'inline',
                                                            marginTop: -7,
                                                        }}
                                                    />
                                                    <span className="mx-1">{value.author_details.rating}</span>
                                                </div>
                                            </div>
                                            <div className="text-zinc-500 ">{value.content}</div>
                                        </div>
                                    );
                                })}
                            </Slider>
                            <div
                                className="flex justify-center rounded-lg px-2 py-2 mt-5"
                                style={{ textAlign: 'center' }}
                            >
                                <button onClick={handlePrev} className="bg-zinc-900 rounded-3xl mr-5 lg:mr-0">
                                    <img className="px-2 py-2" alt="" src={iconRight} />
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
                                <button onClick={handleNext} className="bg-zinc-900  rounded-3xl">
                                    <img className="px-2 py-2" alt="" src={IconLeft} />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="bg-zinc-800 mx-auto rounded-lg order-first lg:order-last">
                        <div className=" m-10">
                            <div className="flex mb-5">
                                <img alt="" src={vector} />
                                <span className="ml-2 text-zinc-400">Released Year</span>
                            </div>
                            <span className="">{data?.release_date}</span>
                            <div className="flex my-5">
                                <img alt="" src={vector1} />
                                <span className="ml-2 text-zinc-400">Available Languages</span>
                            </div>
                            <div className="flex">
                                {data?.spoken_languages.map((value, index) => {
                                    return (
                                        <div key={index} className="">
                                            <div className="bg-zinc-900 border border-zinc-700 py-2 px-3 rounded-lg mr-5">
                                                {value.name}
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>

                            <div className="flex my-5">
                                <img alt="" src={star5} />
                                <span className="ml-2 text-zinc-400">Ratings</span>
                            </div>
                            <div className="grid grid-cols-2 gap-x-5">
                                <div className="bg-zinc-900 rounded-lg border border-zinc-600">
                                    <div className="m-4 text-xl">IMDb</div>
                                    <div className="flex m-4 items-center">
                                        <img className="mr-3 w-32 h-6" alt="" src={iconStar} />
                                        <span className="text-2xl">4.5</span>
                                    </div>
                                </div>
                                <div className="bg-zinc-900 rounded-lg border border-zinc-600">
                                    <div className="m-4 text-xl">StreamVibe</div>
                                    <div className="flex m-4 items-center">
                                        <img className="mr-3 w-32 h-6" alt="" src={iconStar} />
                                        <span className="text-2xl">5</span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex my-5">
                                <img alt="" src={vector2} />
                                <span className="ml-2 text-zinc-400">Gernes</span>
                            </div>
                            {data?.genres.map((value, index) => {
                                return (
                                    <span
                                        key={index}
                                        className="bg-zinc-900 border border-zinc-700 py-2 px-3 rounded-lg mr-5"
                                    >
                                        {value.name}
                                    </span>
                                );
                            })}
                            <div className="mt-5">
                                {credit?.crew.map((value, index) => {
                                    return (
                                        <div key={index}>
                                            {value.job === 'Director' && (
                                                <div>
                                                    <span className="text-zinc-400">{value.job}</span>
                                                    <div className="flex mt-3 bg-zinc-900 border border-zinc-700 py-2 px-3 rounded-lg">
                                                        <img className="h-12 w-12 mr-3" alt="" src={avatar} />
                                                        <div className="">
                                                            <div>{value.name}</div>
                                                            <div className="text-zinc-400">{value.department}</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                            {value.job === 'Original Music Composer' && (
                                                <div className="mt-6">
                                                    <span className="text-zinc-400">{value.job}</span>
                                                    <div className="flex mt-3 bg-zinc-900 border border-zinc-700 py-2 px-3 rounded-lg">
                                                        <img className="h-12 w-12 mr-3" alt="" src={avatar} />
                                                        <div className="">
                                                            <div>{value.name}</div>
                                                            <div className="text-zinc-400">{value.department}</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
