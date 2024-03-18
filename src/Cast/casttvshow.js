import iconRight from './image/IconRight.png';
import IconLeft from './image/IconLeft.png';
import { useRef, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from './axios.js';

import Slider from 'react-slick';
import GetFileUrl from '../libs.js';

function CastTvShow() {
    const { id } = useParams();
    const [credit, setCredit] = useState(null);

    useEffect(() => {
        axios.get(`/3/tv/${id}/credits`).then((res) => {
            setCredit(res.data);
        });
    }, [id]);

    const slider = useRef(null);
    const handlePrev = () => {
        slider.current.slickPrev();
    };

    const handleNext = () => {
        slider.current.slickNext();
    };

    const settings = {
        dots: false,
        infinite: true,
        arrows: false,
        slidesToShow: 5,
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
                    slidesToShow: 4,
                    slidesToScroll: 4,
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
    return (
        <div className="flex flex-col bg-zinc-800 rounded-lg mt-5">
            <div className="mx-10 my-10">
                <div className="flex justify-between">
                    <span className="text-zinc-400">Cast</span>
                    <div className="flex justify-center rounded-lg px-2 py-2 mt-5" style={{ textAlign: 'center' }}>
                        <button onClick={handlePrev} className="bg-zinc-900 rounded-3xl mr-3 lg:mr-3">
                            <img className="px-2 py-2" alt="" src={iconRight} />
                        </button>

                        <button onClick={handleNext} className="bg-zinc-900  rounded-3xl">
                            <img className="px-2 py-2" alt="" src={IconLeft} />
                        </button>
                    </div>
                </div>

                <Slider {...settings} className="flex max-w-screen-2xl mx-auto mt-5">
                    {credit?.cast.map((value, index) => {
                        return (
                            <div key={index}>
                                <img className="rounded-xl" alt="" src={GetFileUrl(value.profile_path, 'w185')} />
                                <span>{value.name}</span>
                            </div>
                        );
                    })}
                </Slider>
            </div>
        </div>
    );
}

export default CastTvShow;
