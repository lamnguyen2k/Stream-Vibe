import IconMinus from './image/Icon1.png';
import { NavLink } from 'react-router-dom';
import React, { useState } from 'react';
import QuestionsCard from '../QuestionCard';

function Questions() {
    const [questions, setQuestion] = useState([
        {
            id: '1',
            title: 'What is StreamVibe?',
            content: ' StreamVibe is a streaming service that allows you to watch movies and shows on demand',
            iconplush: IconMinus,
        },
        {
            id: '2',
            title: 'How much does StreamVibe cost?',
            content: ' StreamVibe is a streaming service that allows you to watch movies and shows on demand',
            iconplush: IconMinus,
        },
        {
            id: '3',
            title: 'What content is available on StreamVibe?',
            content: ' StreamVibe is a streaming service that allows you to watch movies and shows on demand',
            iconplush: IconMinus,
        },
        {
            id: '4',
            title: 'What is StreamVibe?',
            content: ' StreamVibe is a streaming service that allows you to watch movies and shows on demand',
            iconplush: IconMinus,
        },
        {
            id: '5',
            title: 'How do I sign up for StreamVibe?',
            content: ' StreamVibe is a streaming service that allows you to watch movies and shows on demand',
            iconplush: IconMinus,
        },
    ]);

    return (
        <div className="wrapper">
            <section className="max-w-screen-2xl mx-auto">
                <div className="py-1 mx-auto max-w-screen-1xl lg:py-16 lg:px-6">
                    <div className="flex lg: lg:flex flex justify-between mx-auto lg:mb-12">
                        <div className="">
                            <h2 className="mb-4 text-4xl tracking-tight font-semibold">Frequently Asked Questions</h2>
                            <p className="font-light text-sm text-zinc-400">
                                Got questions? We've got answers! Check out our FAQ section to find answers to the most
                                common questions about StreamVibe.
                            </p>
                        </div>
                        <NavLink to="" className="font-semibold text-white ">
                            <button className="rounded px-5 py-3 mx-4 bg-red-600 rounded-lg justify-center ">
                                <span className="font-semibold">Ask a Questions</span>
                            </button>
                        </NavLink>
                    </div>
                    <div className=" xl:gap-2 lg:space-y-0">
                        <div className="grid mx-auto grid-cols-1 lg:grid-cols-2 gap-10 mt-10">
                            {questions.map((value, index) => {
                                return <QuestionsCard key={index} data={value} />;
                            })}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Questions;
