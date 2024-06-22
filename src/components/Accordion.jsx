import React, { useState } from 'react'
import Greater from '../images/svg/Greater';
import Down from '../images/svg/Down';
import Pencil from '../images/svg/Pencil';
import Bin from '../images/svg/Bin';

export default function Accordion({ title, items }) {
    const [collapsed, setCollapsed] = useState(true);

    return (
        <div>
            <div className='cursor-pointer' onClick={() => setCollapsed(!collapsed)}>
                <div className='font-bold p-2 flex gap-2'>{collapsed ? <div className='w-6'><Greater /></div> : <div className=' w-6'><Down /></div>} {title}</div>
            </div>
            {!collapsed && items.map((item, index) => (
                <div className='px-5 flex justify-between' key={index}>
                    <div className='flex gap-1'><div>{item}</div><div className='w-4 h-6'> <Greater /></div></div>
                    <div className='flex gap-2'>
                        <div className='w-6'><Pencil /></div>
                        <div className='w-6'><Bin /></div>
                    </div>
                </div>
            ))}
            <hr className='border-gray-600' />
        </div>
    )
}
