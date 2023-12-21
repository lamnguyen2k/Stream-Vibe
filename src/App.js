import './App.css';
import { publicRoutes } from './routes';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { NavLink } from 'react-router-dom';
import logo from './image/Logo.png';
import iconSearch from './image/Iconsearch.png';
import icon from './image/Icon.png';
import button from './image/Button.png';
import closer from './image/IconCloser.png';

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
                <header className="absolute inset-x-0 top-0 z-50">
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
                        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-zinc-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                            <div className="flex items-center justify-between">
                                <NavLink to="/" className="-m-1.5 p-1.5">
                                    <img className="h-8 w-auto" src={logo} alt="" />
                                </NavLink>
                                <button
                                    type="button"
                                    className="-m-2.5 rounded-md bg-zinc-900 p-2.5 text-gray-700"
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
            </div>
        </Router>
    );
}

export default App;
