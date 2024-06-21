import React, { useEffect, useState } from 'react';
import SidePanel from './SidePanel';
import RightSide from './RightSide';
import TableUI from './TableUI';

export default function Home() {
    const [showLeftSide, setShowLeftSide] = useState(window.innerWidth > 768);
    const [showRightSide, setShowRightSide] = useState(window.innerWidth > 768);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 768) {
                setShowLeftSide(true);
                setShowRightSide(true);
            } else {
                setShowLeftSide(false);
                setShowRightSide(false);
            }
        }
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className='flex h-dvh'>
            {showLeftSide && <><SidePanel /> <div className='fixed bottom-2 start-2 cursor-pointer' onClick={() => setShowLeftSide(false)}>&lt;</div></>}
            {!showLeftSide && <div className='cursor-pointer bg-teal-500 flex items-center' onClick={() => setShowLeftSide(true)}>&gt;</div>}
            <div className='flex-grow bg-gray-100 flex flex-col'>

                <div className='p-5 px-10'>Root/logger</div>
                <hr className='border-gray-600' />

                <div className='flex flex-1'>
                    <div className='flex-grow border-r border-gray-600 flex flex-col'>

                        <div className='p-5 px-10 flex justify-between gap-3'>
                            <div className='font-bold'>Activity_name</div>
                            <input type="text" className='m-1 mx-3 rounded-full ps-2 bg-white flex-grow text-xl' />
                            <div>updown</div>
                            <div>setting</div>
                        </div>
                        <hr className='border-gray-600' />

                        <div className='flex-1 flex m-3'>
                            <div className='flex-grow'><TableUI /></div>
                            <div className='flex items-center ps-2 hover:bg-gray-200 cursor-pointer'>&lt;</div>
                        </div>
                    </div>
                    {showRightSide && <><RightSide /> <div className='fixed bottom-2 right-2 cursor-pointer' onClick={() => setShowRightSide(false)}>&gt;</div></>}
                    {!showRightSide && <div className='cursor-pointer bg-slate-700 flex items-center text-white' onClick={() => setShowRightSide(true)}>&lt;</div>}
                </div>
            </div>
        </div>
    );
}
