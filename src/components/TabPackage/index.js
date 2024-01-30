import React, { useState, useRef, useEffect } from 'react';

function TabPackage(props) {
    const [selctedTabs, setSelctedTabs] = useState(1);
    const firstBtnRef = useRef();
    useEffect(() => {
        firstBtnRef.current.focus();
    }, []);
    return (
        <div className="flex justify-center items-center flex lg:hidden">
            <div className="max-w-full mx-7 flex flex-col gap-y-2 w-full">
                <div className="bg-zinc-950 px-1 py-5 flex justify-between items-center gap-x-2 font-bold rounded-lg">
                    {props.data.map((value, index) => {
                        return (
                            <button
                                key={index}
                                className="w-full outline-none hover:bg-zinc-800 py-4 mx-2 rounded-lg focus:bg-zinc-800"
                                ref={index === 1 ? firstBtnRef : null}
                                onClick={() => setSelctedTabs(index)}
                            >
                                {value.title}
                            </button>
                        );
                    })}
                </div>
                <div className=" px-1 rounded-lg">
                    {props.data.map((value, index) => {
                        return (
                            <div
                                key={index}
                                className={`${
                                    selctedTabs === index ? '' : 'hidden'
                                } my-2 py-5 bg-zinc-950 rounded-lg border border-zinc-600 leading-10`}
                            >
                                <div className="flex justify-between mx-40">
                                    <div className="flex flex-col">
                                        <span>{value.titlePrice}</span>
                                        <span className="text-zinc-500">{value.price}</span>
                                    </div>
                                    <div className="flex flex-col">
                                        <span>{value.titleFreeTrail}</span>
                                        <span className="text-zinc-500">{value.freeTrail}</span>
                                    </div>
                                </div>
                                <div className="flex flex-col ml-40">
                                    <span>{value.titleContent}</span>
                                    <span className="text-zinc-500">{value.content}</span>
                                </div>
                                <div className="flex flex-col ml-40">
                                    <span>{value.titleDevices}</span>
                                    <span className="text-zinc-500">{value.devices}</span>
                                </div>
                                <div className="flex justify-between mx-40">
                                    <div className="flex flex-col">
                                        <span>{value.titleCancelAnytime}</span>
                                        <span className="text-zinc-500">{value.cancelAnytime}</span>
                                    </div>
                                    <div className="flex flex-col">
                                        <span>{value.titleHDR}</span>
                                        <span className="text-zinc-500">{value.hdr}</span>
                                    </div>
                                </div>
                                <div className="flex justify-between mx-40">
                                    <div className="flex flex-col">
                                        <span>{value.titleDolbyAtmos}</span>
                                        <span className="text-zinc-500">{value.dolbyAtmos}</span>
                                    </div>
                                    <div className="flex flex-col">
                                        <span>{value.titleAdFree}</span>
                                        <span className="text-zinc-500">{value.adFree}</span>
                                    </div>
                                </div>
                                <div className="flex justify-between mx-40">
                                    <div className="flex flex-col">
                                        <span>{value.titleOfflineViewing}</span>
                                        <span className="text-zinc-500">{value.offlineViewing}</span>
                                    </div>
                                    <div className="flex flex-col">
                                        <span>{value.titleFamilySharing}</span>
                                        <span className="text-zinc-500">{value.familySharing}</span>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default TabPackage;
