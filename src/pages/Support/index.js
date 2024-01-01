import Questions from '../../components/Questions';
import imgForm from './image/SubContainer.png';

function Support() {
    return (
        <div className="wrapper my-40 max-w-screen-2xl mx-auto">
            <div className="space-y-8 lg:grid xl:grid-cols-2 ls:grid-cols-2 md:grid-cols-1 xl:gap-5 ">
                <div className="">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold">Welcome to our support page!</h2>
                    <p className="font-light text-sm text-zinc-400 my-5">
                        We're here to help you with any problems you may be having with our product.
                    </p>
                    <img className="w-full" alt="" src={imgForm} />
                </div>

                <form className="bg-black px-4 py-4 rounded-lg border  border-zinc-700">
                    <div className="mb-5 flex lg:grid xl:grid-cols-2 ls:grid-cols-2 md:grid-cols-1 sm:gap-2 xl:gap-5 lg:space-y-0">
                        <div className="">
                            <label htmlFor="email" className="block mb-2 text-sm font-medium ">
                                First Name
                            </label>
                            <input
                                type="title"
                                id="title"
                                className="bg-zinc-800 border border-zinc-700 text-white text-sm rounded-md  block w-full p-2.5"
                                placeholder="Enter First Name"
                                required
                            />
                        </div>
                        <div className="">
                            <label htmlFor="email" className="block mb-2 text-sm font-medium ">
                                Last Name
                            </label>
                            <input
                                type="title"
                                id="title"
                                className="bg-zinc-800 border border-zinc-700 text-white text-sm rounded-md  block w-full p-2.5"
                                placeholder="Enter Last Name"
                                required
                            />
                        </div>
                    </div>
                    <div className="mb-5 flex lg:grid xl:grid-cols-2 ls:grid-cols-2 md:grid-cols-1 md:gap-2 xl:gap-5 lg:space-y-0">
                        <div className="">
                            <label htmlFor="email" className="block mb-2 text-sm font-medium ">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                className="bg-zinc-800 border border-zinc-700 text-white text-sm rounded-md  block w-full p-2.5"
                                placeholder="Enter First Name"
                                required
                            />
                        </div>
                        <div className="">
                            <label htmlFor="email" className="block mb-2 text-sm font-medium ">
                                Phone Number{' '}
                            </label>

                            <div className="flex">
                                <input
                                    type="title"
                                    id="title"
                                    className="bg-zinc-800 border border-zinc-700 text-white text-sm rounded-md  block w-full p-2.5"
                                    placeholder="Enter Last Name"
                                    required
                                />
                            </div>
                        </div>
                    </div>
                    <label for="message" className="block mb-2 text-sm font-medium ">
                        Your message
                    </label>
                    <textarea
                        id="message"
                        rows="4"
                        className="block p-2.5 w-full text-sm text-gray-900 bg-zinc-800 rounded-md "
                        placeholder="Leave a comment..."
                    ></textarea>

                    <div className="flex  justify-between py-5">
                        <div className="flex items-start mb-5">
                            <div className="flex items-center h-5">
                                <input
                                    id="remember"
                                    type="checkbox"
                                    value=""
                                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                                    required
                                />
                            </div>
                            <label htmlFor="remember" className="ms-2 text-sm font-medium ">
                                I agree with Terms of Use and Privacy Policy
                            </label>
                        </div>
                        <button type="submit" className="rounded px-4 py-1 bg-red-600 rounded-lg justify-center">
                            Send Message
                        </button>
                    </div>
                </form>
            </div>
            <Questions />
        </div>
    );
}

export default Support;
