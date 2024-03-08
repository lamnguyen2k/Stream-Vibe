import iconRight from './image/IconRight.png';
import IconLeft from './image/IconLeft.png';
import avatar from './image/people.png';
import { useRef } from 'react';
import Slider from 'react-slick';

function Cast() {
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
        slidesToShow: 8,
        slidesToScroll: 8,
        ref: slider,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
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
                    slidesToShow: 4,
                    slidesToScroll: 4,
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
                    <img className="w-30 h-30 mr-3" alt="" src={avatar} />
                    <img className="w-30 h-30 mr-3" alt="" src={avatar} />
                    <img className="w-30 h-30 mr-3" alt="" src={avatar} />
                    <img className="w-30 h-30 mr-3" alt="" src={avatar} />
                    <img className="w-30 h-30 mr-3" alt="" src={avatar} />
                    <img className="w-30 h-30 mr-3" alt="" src={avatar} />
                    <img className="w-30 h-30 mr-3" alt="" src={avatar} />
                    <img className="w-30 h-30 mr-3" alt="" src={avatar} />
                    <img className="w-30 h-30 mr-3" alt="" src={avatar} />
                    <img className="w-30 h-30 mr-3" alt="" src={avatar} />
                </Slider>
            </div>
        </div>
    );
}

export default Cast;
