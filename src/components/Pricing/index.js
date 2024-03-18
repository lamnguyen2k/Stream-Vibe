import { NavLink } from 'react-router-dom';

function Pricing() {
    return (
        <div className="wrapper">
            <section className="max-w-screen-2xl mx-auto">
                <div className="py-8 mx-auto max-w-screen-2xl lg:py-16 lg:px-6">
                    <div className="lg:flex lg:justify-between">
                        <div className="">
                            <h2 className="mb-4 text-4xl tracking-tight font-semibold">
                                Choose the plan that's right for you
                            </h2>
                            <p className="font-light text-sm text-zinc-400">
                                Join StreamVibe and select from our flexible subscription options tailored to suit your
                                viewing preferences. Get ready for non-stop entertainment!
                            </p>
                        </div>
                        <div className="w-40 flex lg:flex lg:w-40">
                            <NavLink to="" className="font-semibold text-white ">
                                <div className="bg-zinc-600 px-0.5 py-0.5 rounded-lg">
                                    <div className="bg-black px-1 py-1 rounded-lg">
                                        <button
                                            autoFocus
                                            className="focus:outline-none text-sm font-light focus:bg-zinc-700 rounded-lg px-2 py-2"
                                        >
                                            Month
                                        </button>
                                        <button className=" text-sm font-light focus:bg-zinc-700 rounded-lg px-2 py-2">
                                            Yearly
                                        </button>
                                    </div>
                                </div>
                            </NavLink>
                        </div>
                    </div>
                    <div className="space-y-8 grid grid-col-1 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
                        {/* <!-- Pricing Card --> */}
                        <div className=" flex-col p-6 mx-auto max-w-lg  rounded-lg bg-zinc-800 xl:p-8 dark:bg-gray-800 ">
                            <h3 className="mb-4 text-2xl font-semibold">Basic Plan</h3>
                            <p className="font-light sm:text-xl text-zinc-400">
                                Enjoy an extensive library of movies and shows, featuring a range of content, including
                                recently released titles.
                            </p>
                            <div className=" items-baseline my-8">
                                <span className="text-5xl font-semibold">$9.99</span>
                                <span className="text-gray-500 dark:text-gray-400">/month</span>
                            </div>

                            <NavLink to="#" className="flex justify-center text-sm font-semibold text-white">
                                <button className="rounded mx-4 bg-zinc-900 px-5 py-3 justify-center ">
                                    <span className="mx-2 font-semibold">Start a Free Trail</span>
                                </button>
                                <button className="rounded px-5 py-3 mx-4 bg-red-600 rounded-lg justify-center ">
                                    <span className="mx-2 font-semibold">Choose Plan</span>
                                </button>
                            </NavLink>
                        </div>
                        <div className=" flex-col p-6 mx-auto max-w-lg  rounded-lg bg-zinc-800 xl:p-8 dark:bg-gray-800 ">
                            <h3 className="mb-4 text-2xl font-semibold">Standard Plan</h3>
                            <p className="font-light sm:text-xl text-zinc-400">
                                Access to a wider selection of movies and shows, including most new releases and
                                exclusive content
                            </p>
                            <div className=" items-baseline my-8">
                                <span className="text-5xl font-semibold">$12.99</span>
                                <span className="text-gray-500 dark:text-gray-400">/month</span>
                            </div>

                            <NavLink to="#" className="flex justify-center text-sm font-semibold text-white">
                                <button className="rounded mx-4 bg-zinc-900 px-5 py-3 justify-center ">
                                    <span className="mx-2 font-semibold">Start a Free Trail</span>
                                </button>
                                <button className="rounded px-5 py-3 mx-4 bg-red-600 rounded-lg justify-center ">
                                    <span className="mx-2 font-semibold">Choose Plan</span>
                                </button>
                            </NavLink>
                        </div>
                        <div className=" flex-col p-6 mx-auto max-w-lg  rounded-lg bg-zinc-800 xl:p-8 dark:bg-gray-800 ">
                            <h3 className="mb-4 text-2xl font-semibold">Premium Plan</h3>
                            <p className="font-light sm:text-xl text-zinc-400">
                                Access to a widest selection of movies and shows, including all new releases and Offline
                                Viewing
                            </p>
                            <div className=" items-baseline my-8">
                                <span className="text-5xl font-semibold">$14.99</span>
                                <span className="text-gray-500 dark:text-gray-400">/month</span>
                            </div>

                            <NavLink to="#" className="flex justify-center text-sm font-semibold text-white">
                                <button className="rounded mx-4 bg-zinc-900 px-5 py-3 justify-center ">
                                    <span className="mx-2 font-semibold">Start a Free Trail</span>
                                </button>
                                <button className="rounded px-5 py-3 mx-4 bg-red-600 rounded-lg justify-center ">
                                    <span className="mx-2 font-semibold">Choose Plan</span>
                                </button>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Pricing;
