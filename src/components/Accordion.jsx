import React, { useState } from 'react'

export default function Accordion({ title, items }) {
    const [collapsed, setCollapsed] = useState(true);

    return (
        <div>
            <div className='cursor-pointer' onClick={() => setCollapsed(!collapsed)}>
                <div className='font-bold p-2'>{collapsed ? '>' : 'v'} {title}</div>
            </div>
            {!collapsed && items.map((item, index) => (
                <div className='px-5 flex justify-between' key={index}>
                    <div>{item}</div>
                    <div>edit</div>
                    <div>delete</div>
                </div>
            ))}
            <hr className='border-gray-600' />
        </div>
    )
}
