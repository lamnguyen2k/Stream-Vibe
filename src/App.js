import './App.css';
import logo from './image/Logo.png';
import iconSearch from './image/Iconsearch.png';
import icon from './image/Icon.png';
import button from './image/Button.png';
import closer from './image/IconCloser.png';
import iconFb from './image/ButtonFace.png';
import iconTw from './image/ButtonTwitter.png';
import iconIn from './image/ButtonIn.png';
import freeTrailImg from './image/Background Images.png';

import { publicRoutes } from './routes';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { NavLink } from 'react-router-dom';
import { menuFooter } from './components/Footer';

const navigation = [
    { name: 'Home', to: '/' },
    { name: 'Movies & Shows', to: '/movieandshow' },
    { name: 'Support', to: '/support' },
    { name: 'Subscriptions', to: '/subscriptions' },
];

function App() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    return (
        <Router>
            <div className="App">
                {/* HEADER */}
                <header className="absolute inset-x-0 top-0 z-60">
                    <nav className="flex  items-center justify-between p-6 lg:px-8" aria-label="Global">
                        <div className="flex lg:flex-1">
                            <NavLink to="/" className="-m-1.5 p-1.5">
                                <img className="h-15 w-40" src={logo} alt="" />
                            </NavLink>
                        </div>
                        <div className="flex lg:hidden">
                            <button
                                type="button"
                                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                                onClick={() => setMobileMenuOpen(true)}
                            >
                                <img alt="" src={button} />
                            </button>
                        </div>
                        <div className="hidden lg:flex lg:gap-x-1 bg-zinc-800 py-1 px-1 rounded-xl">
                            <div className="py-3 px-3 bg-black rounded-xl">
                                {navigation.map((item) => (
                                    <NavLink
                                        key={item.name}
                                        to={item.to}
                                        className="font-semibold text-white  px-4 py-2 btn-page"
                                    >
                                        <span className=" text-sm">{item.name}</span>
                                    </NavLink>
                                ))}
                            </div>
                        </div>
                        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                            <button className="mx-4">
                                <img alt="" src={iconSearch} />
                            </button>
                            <button>
                                <img alt="" src={icon} />
                            </button>
                        </div>
                    </nav>
                    <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                        <div className="fixed inset-0 z-50" />
                        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-zinc-700 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                            <div className="flex items-center justify-between">
                                <NavLink to="/" className="-m-1.5 p-1.5">
                                    <img className="h-8 w-auto" src={logo} alt="" />
                                </NavLink>
                                <button
                                    type="button"
                                    className="-m-2.5 rounded-md bg-zinc-700 p-2.5 text-gray-700"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    <img alt="" src={closer} />
                                </button>
                            </div>
                            <div className="mt-6 flow-root">
                                <div className="-my-6 divide-y divide-gray-500/10">
                                    <div className="space-y-2 py-6">
                                        {navigation.map((item) => (
                                            <NavLink
                                                key={item.name}
                                                to={item.to}
                                                className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-gray-700"
                                            >
                                                <span className="title-page text-white"> {item.name}</span>
                                            </NavLink>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </Dialog.Panel>
                    </Dialog>
                </header>
                <div className="wrapper">
                    <Routes>
                        {publicRoutes.map((route, index) => {
                            const Page = route.component;
                            return <Route key={index} path={route.path} element={<Page />} />;
                        })}
                    </Routes>
                </div>
                {/* FREE-TRAIL */}

                <div className="free-trail mx-auto max-w-screen-2xl my-10">
                    <div className="relative ">
                        <img className="" alt="" src={freeTrailImg} />
                        <div className="absolute flex justify-between my-20 top-0 w-5/6 h-5/6 index-1">
                            <div className="title mx-10">
                                <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                                    Start your free trial today!
                                </h1>
                                <p className=" mt-6 text-lg leading-8 text-zinc-400">
                                    This is a clear and concise call to action that encourages users to sign up for a
                                    free trial of StreamVibe.
                                </p>
                            </div>
                            <NavLink to="#" className="rounded-md my-10 px-3.5 py-2.5 text-sm font-semibold text-white">
                                <button className="flex bg-red-600 px-5 py-3 rounded-lg justify-center ">
                                    <span className="mx-2 font-semibold">Start a Free Trail</span>
                                </button>
                            </NavLink>
                        </div>
                    </div>
                </div>
                {/* FOOTER APP */}
                <footer className="bg-black dark:bg-gray-900">
                    <div className="mx-auto w-full max-w-screen-2xl p-4 py-6 lg:py-8 flex flex-col justify-between">
                        <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                            <div className="flex">
                                {menuFooter.map((value, index) => {
                                    return (
                                        <ul className="text-gray-500 dark:text-gray-400 font-medium mx-20" key={index}>
                                            <h2 className="mb-6 text-sm font-semibold text-white uppercase dark:text-white">
                                                {value.title}
                                            </h2>
                                            <li className="flex flex-col">
                                                {value.value.map((link, index) => {
                                                    return (
                                                        <span key={index} className="">
                                                            {link}
                                                        </span>
                                                    );
                                                })}
                                            </li>
                                        </ul>
                                    );
                                })}
                                <div className="mx-10">
                                    <h2 className="mb-6 text-sm font-semibold text-white uppercase dark:text-white">
                                        Connect With Us
                                    </h2>
                                    <button className="flex ">
                                        <img className="px-1 w-15 h-10" alt="" src={iconFb} />
                                        <img className="px-1 w-15 h-10" alt="" src={iconTw} />
                                        <img className="px-1 w-15 h-10" alt="" src={iconIn} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr className="mx-10 border-gray-500 lg:my-8" />
                    <div className="flex justify-between mx-10 py-5 bg-black dark:bg-gray-700 md:flex md:items-center md:justify-between">
                        <span className="text-sm text-gray-500 dark:text-gray-300 sm:text-center">
                            © 2023 <a href="https://flowbite.com/">streamvibe</a>. All Rights Reserved.
                        </span>
                        <div className="text-gray-500">
                            <span>Terms of Use</span>
                            <span>Privacy Policy</span>
                            <span>Cookie Policy</span>
                        </div>
                    </div>
                </footer>
            </div>
        </Router>
    );
}

export default App;
