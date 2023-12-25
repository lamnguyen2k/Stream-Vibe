import iconIndex from './image/TextContainer.png';
import Icon from './image/Icon.png';
import { NavLink } from 'react-router-dom';

function Questions() {
    return (
        <div className="wrapper">
            <section className="max-w-screen-2xl mx-auto">
                <div className="py-8 mx-auto max-w-screen-1xl lg:py-16 lg:px-6">
                    <div className="flex justify-between mx-auto lg:mb-12">
                        <div className="">
                            <h2 className="mb-4 text-4xl tracking-tight font-extrabold">Frequently Asked Questions</h2>
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
                        {/* <!-- Questions Card --> */}
                        <div className="grid mx-auto grid-cols-2 gap-10">
                            <div className="flex justify-between py-5 border-b-2 border-red-500">
                                <div className="flex min-w-0 gap-x-4">
                                    <img alt="" src={iconIndex} />
                                    <div className="min-w-0 flex-auto">
                                        <p className="text-sm font-semibold leading-6">What is StreamVibe?</p>
                                        <p className="mt-1 truncate text-xs leading-5">
                                            StreamVibe is a streaming service that allows you to watch movies and shows
                                            on demand.
                                        </p>
                                    </div>
                                </div>
                                <div className=" shrink-0 sm:flex sm:flex-col sm:items-end">
                                    <button>
                                        <img alt="" src={Icon} />
                                    </button>
                                </div>
                            </div>
                            <div className="flex justify-between py-5 border-b-2 border-red-500">
                                <div className="flex min-w-0 gap-x-4">
                                    <img alt="" src={iconIndex} />
                                    <div className="min-w-0 flex-auto">
                                        <p className="text-sm font-semibold leading-6">What is StreamVibe?</p>
                                        <p className="mt-1 truncate text-xs leading-5">
                                            StreamVibe is a streaming service that allows you to watch movies and shows
                                            on demand.
                                        </p>
                                    </div>
                                </div>
                                <div className=" shrink-0 sm:flex sm:flex-col sm:items-end">
                                    <button>
                                        <img alt="" src={Icon} />
                                    </button>
                                </div>
                            </div>
                            <div className="flex justify-between py-5 border-b-2 border-red-500">
                                <div className="flex min-w-0 gap-x-4">
                                    <img alt="" src={iconIndex} />
                                    <div className="min-w-0 flex-auto">
                                        <p className="text-sm font-semibold leading-6">What is StreamVibe?</p>
                                        <p className="mt-1 truncate text-xs leading-5">
                                            StreamVibe is a streaming service that allows you to watch movies and shows
                                            on demand.
                                        </p>
                                    </div>
                                </div>
                                <div className=" shrink-0 sm:flex sm:flex-col sm:items-end">
                                    <button>
                                        <img alt="" src={Icon} />
                                    </button>
                                </div>
                            </div>
                            <div className="flex justify-between py-5 border-b-2 border-red-500">
                                <div className="flex min-w-0 gap-x-4">
                                    <img alt="" src={iconIndex} />
                                    <div className="min-w-0 flex-auto">
                                        <p className="text-sm font-semibold leading-6">What is StreamVibe?</p>
                                        <p className="mt-1 truncate text-xs leading-5">
                                            StreamVibe is a streaming service that allows you to watch movies and shows
                                            on demand.
                                        </p>
                                    </div>
                                </div>
                                <div className=" shrink-0 sm:flex sm:flex-col sm:items-end">
                                    <button>
                                        <img alt="" src={Icon} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Questions;
