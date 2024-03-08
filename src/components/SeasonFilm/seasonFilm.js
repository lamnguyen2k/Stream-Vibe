import React from 'react';
import { useState } from 'react';

function SeasonFilm(props) {
    const [active, setActive] = useState(false);

    const handleQuestion = () => {
        setActive(!active);
    };
    return (
        <div className={`pt-2 mt-4 group ${active ? 'is-active' : ''} bg-zinc-900 rounded-lg`}>
            <div className={`flex mb-8 justify-between`}>
                <div className="flex items-center justify-center">
                    <span className="text-2xl ml-5">{props.data.season}</span>
                    <span className="ml-2 text-zinc-500">{props.data.episodes}</span>
                </div>
                <button
                    onClick={handleQuestion}
                    className="mr-10 bg-zinc-800 px-2 py-2 rounded-3xl border border-zinc-600"
                >
                    {active ? <img alt="" src={props.data.iconUp} /> : <img alt="" src={props.data.iconDown} />}
                </button>
            </div>
            <div className="-mt-10">
                {props.items.map((value, index) => {
                    return (
                        <div
                            key={index}
                            className="text-zinc-400 my-6 mt-5 overflow-hidden max-h-0 group-[.is-active]:max-h-[600px]  "
                        >
                            <div className="grid grid-cols-4 mt-4 border-t-2 border-zinc-500 flex">
                                <div className="flex ">
                                    <span className="text-2xl ml-5 flex items-center mr-2">{value.id}</span>
                                    <img className="mt-5" alt="" src={value.img} />
                                </div>
                                <div className=" col-span-3  mt-10">
                                    <div className="flex justify-between">
                                        <div className="flex items-center justify-center text-white">
                                            {value.titleFilm}
                                        </div>
                                        <div className="flex justify-center items-center bg-zinc-900 rounded-lg px-2 py-1 mr-5">
                                            <img className="h-5 w-5 " alt="" src={value.iconTime} />
                                            <span className="">{value.time}</span>
                                        </div>
                                    </div>
                                    <div className="">
                                        <span>{value.contentFilm}</span>
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
