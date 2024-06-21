import React, { useEffect, useState } from 'react';
import SidePanel from './SidePanel';
import RightSide from './RightSide';
import TableUI from './TableUI';
import UpDown from '../images/svg/UpDown';
import Cog from '../images/svg/Cog';
import Greater from '../images/svg/Greater';
import Lesser from '../images/svg/Lesser';

export default function Home() {
    const [showLeftSide, setShowLeftSide] = useState(window.innerWidth > 768);
    const [showRightSide, setShowRightSide] = useState(window.innerWidth > 768);
    const [smallScreen, setSmallScreen] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 768) {
                setShowLeftSide(true);
                setShowRightSide(true);
                setSmallScreen(false);
            } else {
                setShowLeftSide(false);
                setShowRightSide(false);
                setSmallScreen(true);
            }
        }
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className='flex h-dvh'>
            <div>
                {
                    smallScreen ?
                        <>
                            {showLeftSide && <div className='fixed h-full'>
                                <SidePanel />
                                <div className='fixed bottom-2 start-2 cursor-pointer' onClick={() => setShowLeftSide(false)}><Lesser /></div>
                            </div>}
                        </>
                        :
                        <>
                            {showLeftSide && <><SidePanel /> <div className='fixed bottom-2 start-2 cursor-pointer' onClick={() => setShowLeftSide(false)}><Lesser /></div></>}
                        </>
                }
                {!showLeftSide && <div className='cursor-pointer bg-teal-500 flex items-center h-full' onClick={() => setShowLeftSide(true)}><Greater /></div>}
            </div>

            <div className='w-full border-r border-gray-600 bg-gray-200'>
                <div className='p-4 px-6'>Root/logger</div>
                <hr className='border-gray-600' />
                <div className='p-3 flex justify-between gap-3'>
                    <div className='font-bold'>Activity_name</div>
                    <div className='flex-grow'>
                        <input type="text" className='rounded-full ps-2 bg-white w-full' placeholder='search' />
                    </div>
                    <div><UpDown /></div>
                    <div><Cog /></div>
                </div>
                <hr className='border-gray-600' />
                <div className='flex-grow m-3'><TableUI /></div>
            </div>

            <div className=''>
                {
                    smallScreen ?
                        <>
                            {showRightSide && <div className='fixed right-0 bg-white h-full border-s border-gray-600'>
                                <RightSide />
                                <div className='fixed bottom-2 right-2 cursor-pointer' onClick={() => setShowRightSide(false)}><Greater /></div>
                            </div>}
                        </>
                        :
                        <>
                            {showRightSide && <><RightSide /> <div className='fixed bottom-2 right-2 cursor-pointer' onClick={() => setShowRightSide(false)}><Greater /></div></>}
                        </>
                }
                {!showRightSide && <div className='cursor-pointer bg-slate-700 flex items-center text-white h-full' onClick={() => setShowRightSide(true)}><Lesser /></div>}
            </div>

        </div>
    );
}
