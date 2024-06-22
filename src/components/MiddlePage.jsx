import React from 'react'
import UpDown from '../images/svg/UpDown'
import Cog from '../images/svg/Cog'
import TableUI from './TableUI'

export default function MiddlePage() {
    return (
        <div className='w-full border-r border-gray-600 bg-gray-200'>
            <div className='p-4 px-6'>Root/logger</div>
            <hr className='border-gray-600' />
            <div className='p-3 flex justify-between gap-3'>
                <div className='font-bold'>Activity_name</div>
                <div className='flex-grow'>
                    <input type="text" className='rounded-full ps-2 bg-white w-full' placeholder='search' />
                </div>
                <div className='w-6'><UpDown /></div>
                <div className='w-6'><Cog /></div>
            </div>
            <hr className='border-gray-600' />
            <div className='flex-grow m-3'><TableUI /></div>
        </div>
    )
}
