import React from 'react';
import SidePanel from './SidePanel';
import RightSide from './RightSide';
import TableUI from './TableUI';

export default function Home() {
    return (
        <div className='flex h-dvh'>
            <SidePanel />
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
                            <div className='flex-grow'><TableUI/></div>
                            <div className='flex items-center ps-2'>&lt;</div>
                        </div>
                    </div>
                    <RightSide />
                </div>
            </div>
        </div>
    );
}
