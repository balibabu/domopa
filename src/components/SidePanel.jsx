import React from 'react'
import logo from '../images/logo.png'
import Accordion from './Accordion'
import Adjust from '../images/svg/Adjust'

export default function SidePanel() {
    return (
        <div className='bg-teal-500 h-full'>
            <div className='p-10 grid justify-items-center'>
                <div className='w-10'><img src={logo} alt='app logo' /></div>
                <div className='font-bold text-xl text-center'>DOMAIN LOGGER</div>
            </div>
            <hr className='border-gray-600' />

            <div className='p-2 flex gap-2'>
                <input type="text" className='rounded-full ps-2 flex-grow' placeholder='search' />
                <div><Adjust /></div>
            </div>
            <hr className='border-gray-600' />

            <Accordion {...{ title: 'Domain', items: ['item 1', 'item 2'] }} />
            <Accordion {...{ title: 'Operation', items: ['item 1', 'item 2', 'item 3'] }} />
            <Accordion {...{ title: 'Activity', items: ['item 0', 'item 1', 'item 2'] }} />

        </div>
    )
}
