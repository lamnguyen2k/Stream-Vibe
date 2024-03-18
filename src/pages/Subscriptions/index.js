import { useState } from 'react';
import Pricing from '../../components/Pricing';
import TabPackage from '../../components/TabPackage';

function Subscriptions(contentId) {
    const [tabs, setTabs] = useState([
        {
            title: 'Basic',
            titlePrice: 'Price',
            price: '$9.99/Month',
            titleFreeTrail: 'Free Trail',
            freeTrail: '7 Days',
            titleContent: 'Content',
            content: 'Access to a wide selection of movies and shows, including some new releases.',
            titleDevices: 'Devices',
            devices: 'Watch on one device simultaneously',
            titleCancelAnytime: 'Cancel Anytime',
            cancelAnytime: 'yes',
            titleHDR: 'HDR',
            hdr: 'no',
            titleDolbyAtmos: 'Dolby Atmos',
            dolbyAtmos: 'no',
            titleAdFree: 'Ad Free',
            adFree: 'no',
            titleOfflineViewing: 'Offline Viewing',
            offlineViewing: 'no',
            titleFamilySharing: 'Family Sharing',
            familySharing: 'no',
        },
        {
            title: 'Standard',
            titlePrice: 'Price',
            titleFreeTrail: 'Free Trail',
            titleContent: 'Content',
            titleDevices: 'Devices',
            titleCancelAnytime: 'Cancel Anytime',
            titleHDR: 'HDR',
            titleDolbyAtmos: 'Dolby Atmos',
            titleAdFree: 'Ad Free',
            titleOfflineViewing: 'Offline Viewing',
            titleFamilySharing: 'Family Sharing',
            price: '$12.99/Month',
            freeTrail: '7 Days',
            content:
                'Access to a wider selection of movies and shows, including most new releases and exclusive content',
            devices: 'Watch on Two device simultaneously',
            cancelAnytime: 'yes',
            hdr: 'yes',
            dolbyAtmos: 'yes',
            adFree: 'yes',
            offlineViewing: 'Yes, for select titles.',
            familySharing: '5 family members.',
        },
        {
            title: 'Premium',
            titlePrice: 'Price',
            titleFreeTrail: 'Free Trail',
            titleContent: 'Content',
            titleDevices: 'Devices',
            titleCancelAnytime: 'Cancel Anytime',
            titleHDR: 'HDR',
            titleDolbyAtmos: 'Dolby Atmos',
            titleAdFree: 'Ad Free',
            titleOfflineViewing: 'Offline Viewing',
            titleFamilySharing: 'Family Sharing',
            price: '$14.99/Month',
            freeTrail: '7 Days',
            content: 'Access to a widest selection of movies and shows, including all new releases and Offline Viewing',
            devices: 'Watch on four device simultaneously',
            cancelAnytime: 'yes',
            hdr: 'yes',
            dolbyAtmos: 'yes',
            adFree: 'yes',
            offlineViewing: 'Yes, for all titles.',
            familySharing: 'Yes, up to 6 family members.',
        },
    ]);

    return (
        <div className="wrapper mt-20">
            <Pricing />
            <div className=" max-w-screen-2xl mx-auto my-6">
                <div className="">
                    <h2 className="mb-4 text-4xl tracking-tight font-semibold">Frequently Asked Questions</h2>
                    <p className="font-light text-sm text-zinc-400">
                        Got questions? We've got answers! Check out our FAQ section to find answers to the most common
                        questions about StreamVibe.
                    </p>
                </div>
            </div>
            <div className=" max-w-screen-2xl hidden lg:flex lg:flex-col mx-auto rounded-xl">
                <table className="w-full overflow-x-auto table-fixed text-sm text-left">
                    <thead className="text-base uppercase bg-zinc-950">
                        <tr>
                            <th scope="col" className="px-3 py-7 border border-zinc-600">
                                Features
                            </th>
                            <th scope="col" className="px-3 py-7 border border-zinc-600">
                                Basic
                            </th>
                            <th autoFocus scope="col" className="px-3 py-7 border border-zinc-600 focus:outline-none">
                                Standard
                                <span className="ml-2 text-sm rounded-sm px-1 py-1 bg-red-600">Popular</span>
                            </th>
                            <th scope="col" className="px-3 py-7 border border-zinc-600">
                                Premium
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className=" ">
                            <td className="px-3 py-5 border border-zinc-600 text-zinc-400">Price</td>
                            <td className="px-3 py-5 border border-zinc-600 text-zinc-400">$9.99/Month</td>
                            <td className="px-3 py-5 border border-zinc-600 text-zinc-400">$12.99/Month</td>
                            <td className="px-3 py-5 border border-zinc-600 text-zinc-400">$14.99/Month</td>
                        </tr>
                        <tr className=" ">
                            <td className="px-3 py-8 border border-zinc-600 text-zinc-400">Content</td>
                            <td className="px-3 py-8 border border-zinc-600 text-zinc-400">
                                Access to a wide selection of movies and shows, including some new releases.
                            </td>
                            <td className="px-3 py-8 border border-zinc-600 text-zinc-400">
                                Access to a wider selection of movies and shows, including most new releases and
                                exclusive content
                            </td>
                            <td className="px-3 py-8 border border-zinc-600 text-zinc-400">
                                Access to a widest selection of movies and shows, including all new releases and Offline
                                Viewing
                            </td>
                        </tr>
                        <tr className=" ">
                            <td className="px-3 py-5 border border-zinc-600 text-zinc-400">Devices</td>
                            <td className="px-3 py-5 border border-zinc-600 text-zinc-400">
                                Watch on one device simultaneously
                            </td>
                            <td className="px-3 py-5 border border-zinc-600 text-zinc-400">
                                Watch on two device simultaneously
                            </td>
                            <td className="px-3 py-5 border border-zinc-600 text-zinc-400">
                                Watch on four device simultaneously
                            </td>
                        </tr>
                        <tr className=" ">
                            <td className="px-3 py-5 border border-zinc-600 text-zinc-400">Free Trail</td>
                            <td className="px-3 py-5 border border-zinc-600 text-zinc-400">7 Days</td>
                            <td className="px-3 py-5 border border-zinc-600 text-zinc-400">7 Days</td>
                            <td className="px-3 py-5 border border-zinc-600 text-zinc-400">7 Days</td>
                        </tr>
                        <tr className=" ">
                            <td className="px-3 py-5 border border-zinc-600 text-zinc-400">Cancel Anytime</td>
                            <td className="px-3 py-5 border border-zinc-600 text-zinc-400">Yes</td>
                            <td className="px-3 py-5 border border-zinc-600 text-zinc-400">Yes</td>
                            <td className="px-3 py-5 border border-zinc-600 text-zinc-400">Yes</td>
                        </tr>
                        <tr className=" ">
                            <td className="px-3 py-5 border border-zinc-600 text-zinc-400">HDR</td>
                            <td className="px-3 py-5 border border-zinc-600 text-zinc-400">No</td>
                            <td className="px-3 py-5 border border-zinc-600 text-zinc-400">Yes</td>
                            <td className="px-3 py-5 border border-zinc-600 text-zinc-400">Yes</td>
                        </tr>
                        <tr className=" ">
                            <td className="px-3 py-5 border border-zinc-600 text-zinc-400">Dolby Atmos</td>
                            <td className="px-3 py-5 border border-zinc-600 text-zinc-400">No</td>
                            <td className="px-3 py-5 border border-zinc-600 text-zinc-400">Yes</td>
                            <td className="px-3 py-5 border border-zinc-600 text-zinc-400">Yes</td>
                        </tr>
                        <tr className=" ">
                            <td className="px-3 py-5 border border-zinc-600 text-zinc-400">Ad - Free</td>
                            <td className="px-3 py-5 border border-zinc-600 text-zinc-400">No</td>
                            <td className="px-3 py-5 border border-zinc-600 text-zinc-400">Yes</td>
                            <td className="px-3 py-5 border border-zinc-600 text-zinc-400">Yes</td>
                        </tr>
                        <tr className=" ">
                            <td className="px-3 py-5 border border-zinc-600 text-zinc-400">Offline Viewing</td>
                            <td className="px-3 py-5 border border-zinc-600 text-zinc-400">No</td>
                            <td className="px-3 py-5 border border-zinc-600 text-zinc-400">Yes, for select titles.</td>
                            <td className="px-3 py-5 border border-zinc-600 text-zinc-400">Yes, for all titles.</td>
                        </tr>
                        <tr className=" ">
                            <td className="px-3 py-5 border border-zinc-600 text-zinc-400">Family Sharing</td>
                            <td className="px-3 py-5 border border-zinc-600 text-zinc-400">No</td>
                            <td className="px-3 py-5 border border-zinc-600 text-zinc-400">
                                Yes, up to 5 family members.
                            </td>
                            <td className="px-3 py-5 border border-zinc-600 text-zinc-400">
                                Yes, up to 6 family members.
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <TabPackage data={tabs} />
        </div>
    );
}

export default Subscriptions;
