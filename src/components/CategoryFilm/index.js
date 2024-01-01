import imgAction from './image/Container.png';
import iconNavigation from './image/IndicatorsContainer.png';

import imgAdvanture from './image/Container1.png';
import imgComedy from './image/Container2.png';
import imgDrama from './image/Container3.png';
import imgHorror from './image/Container4.png';

import closer from './image/IconCloser.png';

import { NavLink } from 'react-router-dom';

function CategoryFilm() {
    return (
        <div className="wrapper">
            <section className="max-w-screen-2xl mx-auto">
                <div className="py-8 mx-auto max-w-screen-1xl lg:py-16 lg:px-6">
                    <div className="flex justify-between mx-auto lg:mb-12">
                        <div className="">
                            <h2 className="mb-4 text-4xl tracking-tight font-extrabold">
                                Explore our wide variety of categories
                            </h2>
                            <p className="font-light text-sm text-zinc-400">
                                Whether you're looking for NavLink comedy to make you laugh, NavLink drama to make you
                                think, or NavLink documentary to learn something new
                            </p>
                        </div>
                        <nav aria-label="Page navigation example">
                            <div className="bg-zinc-800 px-0.5 py-0.5 rounded-md">
                                <ul className="flex items-center -space-x-px h-8 bg-black px-2 py-6 rounded-md">
                                    <li>
                                        <NavLink
                                            href="#"
                                            className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-zinc-800 rounded-md"
                                        >
                                            <span className="sr-only">Previous</span>
                                            <svg
                                                className="w-2.5 h-2.5 rtl:rotate-180 text-white"
                                                aria-hidden="true"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 6 10"
                                            >
                                                <path
                                                    stroke="currentColor"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M5 1 1 5l4 4"
                                                />
                                            </svg>
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                            href="#"
                                            className="flex items-center justify-center mx-2 leading-tight text-red"
                                        >
                                            <img alt="" src={iconNavigation} />
                                        </NavLink>
                                    </li>

                                    <li>
                                        <NavLink
                                            href="#"
                                            className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-zinc-800 rounded-md"
                                        >
                                            <span className="sr-only">Next</span>
                                            <svg
                                                className="w-2.5 h-2.5 rtl:rotate-180 text-white"
                                                aria-hidden="true"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 6 10"
                                            >
                                                <path
                                                    stroke="currentColor"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="m1 9 4-4-4-4"
                                                />
                                            </svg>
                                        </NavLink>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                    <div className="space-y-8 lg:grid xl:grid-cols-5 ls:grid-cols-5 md:grid-cols-2 md:gap-5 xl:gap-10 lg:space-y-0">
                        {/* <!-- CategoryFilm Card --> */}
                        <div className=" flex-col p-6 mx-auto max-w-lg  rounded-lg bg-zinc-800 xl:p-8 dark:bg-gray-800 ">
                            <img className="" alt="" src={imgAction} />
                            <div className="flex justify-between py-1">
                                <p>Action</p>
                                <NavLink to="#" className="flex justify-center text-sm font-semibold text-white">
                                    <img alt="" src={closer} />
                                </NavLink>
                            </div>
                        </div>
                        <div className=" flex-col p-6 mx-auto max-w-lg  rounded-lg bg-zinc-800 xl:p-8 dark:bg-gray-800 ">
                            <img className="" alt="" src={imgAdvanture} />
                            <div className="flex justify-between py-1">
                                <p>Advanture</p>
                                <NavLink to="#" className="flex justify-center text-sm font-semibold text-white">
                                    <img alt="" src={closer} />
                                </NavLink>
                            </div>
                        </div>
                        <div className=" flex-col p-6 mx-auto max-w-lg  rounded-lg bg-zinc-800 xl:p-8 dark:bg-gray-800 ">
                            <img className="" alt="" src={imgComedy} />
                            <div className="flex justify-between py-1">
                                <p>Comedy</p>
                                <NavLink to="#" className="flex justify-center text-sm font-semibold text-white">
                                    <img alt="" src={closer} />
                                </NavLink>
                            </div>
                        </div>
                        <div className=" flex-col p-6 mx-auto max-w-lg  rounded-lg bg-zinc-800 xl:p-8 dark:bg-gray-800 ">
                            <img className="" alt="" src={imgDrama} />
                            <div className="flex justify-between py-1">
                                <p>Drama</p>
                                <NavLink to="#" className="flex justify-center text-sm font-semibold text-white">
                                    <img alt="" src={closer} />
                                </NavLink>
                            </div>
                        </div>
                        <div className=" flex-col p-6 mx-auto max-w-lg  rounded-lg bg-zinc-800 xl:p-8 dark:bg-gray-800 ">
                            <img className="" alt="" src={imgHorror} />
                            <div className="flex justify-between py-1">
                                <p>Horror</p>
                                <NavLink to="#" className="flex justify-center text-sm font-semibold text-white">
                                    <img alt="" src={closer} />
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default CategoryFilm;
