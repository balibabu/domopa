import React, { useEffect, useState } from 'react';
import SidePanel from './SidePanel';
import RightSide from './RightSide';
import TableUI from './TableUI';

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
                                <div className='fixed bottom-2 start-2 cursor-pointer' onClick={() => setShowLeftSide(false)}>&lt;</div>
                            </div>}
                        </>
                        :
                        <>
                            {showLeftSide && <><SidePanel /> <div className='fixed bottom-2 start-2 cursor-pointer' onClick={() => setShowLeftSide(false)}>&lt;</div></>}
                        </>
                }
                {!showLeftSide && <div className='cursor-pointer bg-teal-500 flex items-center h-full' onClick={() => setShowLeftSide(true)}>&gt;</div>}
            </div>

            <div className='w-full  bg-gray-200 '>
                <div className='p-5 px-10'>Root/logger</div>
                <hr className='border-gray-600' />
                <div className='flex h-full'>

                    <div className='w-full'>
                        <div className='p-3 flex justify-between flex-row gap-2'>
                            <div className='font-bold'>Activity_name</div>
                            <input type="text" className='m-1 mx-3 rounded-full ps-2 bg-white flex-grow' placeholder='search'/>
                            <div>ud</div>
                            <div>se</div>
                        </div>
                        <hr className='border-gray-600' />
                        <div className='flex-grow m-3'><TableUI /></div>
                    </div>

                    <div className='border-s border-gray-600'>
                        {
                            smallScreen ?
                                <>
                                    {showRightSide && <div className='fixed right-0 bg-white h-full border-s border-gray-600'>
                                        <RightSide />
                                        <div className='fixed bottom-2 right-2 cursor-pointer' onClick={() => setShowRightSide(false)}>&gt;</div>
                                    </div>}
                                </>
                                :
                                <>
                                    {showRightSide && <><RightSide /> <div className='fixed bottom-2 right-2 cursor-pointer' onClick={() => setShowRightSide(false)}>&gt;</div></>}
                                </>
                        }
                        {!showRightSide && <div className='cursor-pointer bg-slate-700 flex items-center text-white h-full' onClick={() => setShowRightSide(true)}>&lt;</div>}
                    </div>

                </div>
            </div>
        </div>
    );
}
