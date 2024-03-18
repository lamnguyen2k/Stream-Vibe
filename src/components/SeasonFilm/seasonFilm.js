import React, { useState } from 'react';
import GetFileUrl from '../../libs.js';
import axios from './axios.js';
import iconDown from './image/IconDown.png';
import iconTime from './image/IconTime.png';
import iconUp from './image/IconUp.png';

function SeasonFilm(props) {
    const [active, setActive] = useState(false);
    const [episodes, setEpisodes] = useState(null);
    const handleQuestion = (seasonNumber) => {
        setActive(!active);

        axios.get(`/3/tv/${props.tvId}/season/${seasonNumber}`).then((res) => {
            setEpisodes(res.data);
        });
    };
    let seasonName = props.data.name;
    let upperCase = seasonName.charAt(0).toUpperCase() + seasonName.slice(1);

    return (
        <div className={`pt-2 mt-4 group ${active ? 'is-active' : ''} bg-zinc-900 rounded-lg`}>
            <div className={`flex mb-8 justify-between items-center`}>
                <div className="flex items-center justify-center mb-5">
                    <span className="text-2xl ml-5">{`${upperCase}`}</span>
                    <span className="ml-2 text-zinc-500">{`${props.data.episode_count} Episodes`}</span>
                </div>
                <button
                    onClick={() => handleQuestion(props.data.season_number)}
                    className="mr-10 -mt-3 bg-zinc-800 px-2 py-2 rounded-3xl border border-zinc-600"
                >
                    {active ? <img alt="" src={iconUp} /> : <img alt="" src={iconDown} />}
                </button>
            </div>
            <div className="-mt-10 overflow-hidden max-h-0 group-[.is-active]:max-h-[600px] overflow-y-auto scrollbar-thin scrollbar-thumb-zinc-500 scrollbar-track-zinc-300">
                {episodes?.episodes.map((value, index) => {
                    return (
                        <div key={index} className="text-zinc-400 my-6 ">
                            <div className="grid grid-cols-4 mt-4 border-t-2 border-zinc-500 flex">
                                <div className="flex ">
                                    <span className="text-2xl ml-5 flex items-center mr-2">{(index += 1)}</span>
                                    <img
                                        className="mt-5 rounded-xl"
                                        alt=""
                                        src={GetFileUrl(value.still_path, 'w185')}
                                    />
                                </div>
                                <div className=" col-span-3  mt-7 mx-3">
                                    <div className="flex justify-between">
                                        <div className="flex items-center justify-center text-white">
                                            {`Chapter ${(index += 1)}: ${value.name}`}
                                        </div>
                                        <div className="flex justify-center items-center bg-zinc-900 border border-zinc-600 rounded-lg px-2 py-1 mr-5">
                                            <img className="h-5 w-5 mr-1" alt="" src={`${iconTime}`} />
                                            <span className="">{`${value.runtime} min`}</span>
                                        </div>
                                    </div>
                                    <div className="">
                                        <span>{value.overview}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default SeasonFilm;
