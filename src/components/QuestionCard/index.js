import React, { useState } from 'react';

function QuestionsCard(props) {
    const [active, setActive] = useState(false);
    const handleQuestion = () => {
        setActive(!active);
    };
    return (
        <div className={`py-2 border-b-2 border-red-600 group ${active ? 'is-active' : ''}`}>
            <div className={`flex justify-between`}>
                <div>
                    <span className="px-4 py-3 border border-zinc-600 ">{props.data.id}</span>
                    <span className="ml-2">{props.data.title}</span>
                </div>
                <button onClick={handleQuestion} className="text-3xl">
                    {active ? <span className="text-5xl">-</span> : <span className="text-3xl">+</span>}
                </button>
            </div>
            <div>
                <div className="text-zinc-400 ml-12 overflow-hidden max-h-0 group-[.is-active]:max-h-[100px]">
                    <span> {props.data.content}</span>
                </div>
            </div>
        </div>
    );
}

export default QuestionsCard;
