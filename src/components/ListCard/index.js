import iconPhone from './image/IconPhone.png';
import iconTablet from './image/IconTab.png';
import iconTv from './image/IconTv.png';
import iconLap from './image/IconLap.png';
import iconGame from './image/IconGame.png';
import iconVr from './image/IconVr.png';

function ListCard() {
    return (
        <div>
            <section className="max-w-screen-2xl mx-auto">
                <div className="py-8 mx-auto max-w-screen-1xl lg:py-16 lg:px-6">
                    <div className="flex justify-between mx-auto lg:mb-12">
                        <div className="">
                            <h2 className="mb-4 text-4xl tracking-tight font-semibold">
                                We Provide you streaming experience across various devices.
                            </h2>
                            <p className="font-light text-sm text-zinc-400">
                                With StreamVibe, you can enjoy your favorite movies and TV shows anytime, anywhere. Our
                                platform is designed to be compatible with a wide range of devices, ensuring that you
                                never miss a moment of entertainment.
                            </p>
                        </div>
                    </div>
                    <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0 ">
                        {/* <!-- List Card --> */}
                        <div className=" flex-col p-6 mx-auto max-w-lg  bg-gradient-to-r from-zinc-950 from-60% to-red-800 rounded-lg bg-zinc-800 xl:p-8 dark:bg-gray-800 ">
                            <div className="flex text-center">
                                <img className="h-10 w-10 " alt="" src={iconPhone} />
                                <h3 className="mb-4 text-2xl font-semibold mx-3">Smartphones</h3>
                            </div>
                            <p className="font-light sm:text-lg text-zinc-400">
                                StreamVibe is optimized for both Android and iOS smartphones. Download our app from the
                                Google Play Store or the Apple App Store
                            </p>
                        </div>
                        <div className=" flex-col p-6 mx-auto max-w-lg  bg-gradient-to-r from-zinc-950 from-60% to-red-800 rounded-lg bg-zinc-800 xl:p-8 dark:bg-gray-800 ">
                            <div className="flex text-center">
                                <img className="h-10 w-10 " alt="" src={iconTablet} />
                                <h3 className="mb-4 text-2xl font-semibold mx-3">Tablet</h3>
                            </div>
                            <p className="font-light sm:text-lg text-zinc-400">
                                StreamVibe is optimized for both Android and iOS smartphones. Download our app from the
                                Google Play Store or the Apple App Store
                            </p>
                        </div>
                        <div className=" flex-col p-6 mx-auto max-w-lg  bg-gradient-to-r from-zinc-950 from-60% to-red-800 rounded-lg bg-zinc-800 xl:p-8 dark:bg-gray-800 ">
                            <div className="flex text-center">
                                <img className="h-10 w-10 " alt="" src={iconTv} />
                                <h3 className="mb-4 text-2xl font-semibold mx-3">Smart TV</h3>
                            </div>
                            <p className="font-light sm:text-lg text-zinc-400">
                                StreamVibe is optimized for both Android and iOS smartphones. Download our app from the
                                Google Play Store or the Apple App Store
                            </p>
                        </div>
                        <div className=" flex-col p-6 mx-auto max-w-lg  bg-gradient-to-r from-zinc-950 from-60% to-red-800 rounded-lg bg-zinc-800 xl:p-8 dark:bg-gray-800 ">
                            <div className="flex text-center">
                                <img className="h-10 w-10 " alt="" src={iconLap} />
                                <h3 className="mb-4 text-2xl font-semibold mx-3">Laptops</h3>
                            </div>
                            <p className="font-light sm:text-lg text-zinc-400">
                                StreamVibe is optimized for both Android and iOS smartphones. Download our app from the
                                Google Play Store or the Apple App Store
                            </p>
                        </div>
                        <div className=" flex-col p-6 mx-auto max-w-lg  bg-gradient-to-r from-zinc-950 from-60% to-red-800 rounded-lg bg-zinc-800 xl:p-8 dark:bg-gray-800 ">
                            <div className="flex text-center">
                                <img className="h-10 w-10 " alt="" src={iconGame} />
                                <h3 className="mb-4 text-2xl font-semibold mx-3">Gaming Consoles</h3>
                            </div>
                            <p className="font-light sm:text-lg text-zinc-400">
                                StreamVibe is optimized for both Android and iOS smartphones. Download our app from the
                                Google Play Store or the Apple App Store
                            </p>
                        </div>
                        <div className=" flex-col p-6 mx-auto max-w-lg  bg-gradient-to-r from-zinc-950 from-60% to-red-800 rounded-lg bg-zinc-800 xl:p-8 dark:bg-gray-800 ">
                            <div className="flex text-center">
                                <img className="h-10 w-10 " alt="" src={iconVr} />
                                <h3 className="mb-4 text-2xl font-semibold mx-3">VR Headsets </h3>
                            </div>
                            <p className="font-light sm:text-lg text-zinc-400">
                                StreamVibe is optimized for both Android and iOS smartphones. Download our app from the
                                Google Play Store or the Apple App Store
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default ListCard;
