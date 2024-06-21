import React from 'react'

export default function RightSide() {
    return (
        <div>
            <div className='p-3 flex bg-slate-700 gap-2 font-bold'>
                <div className=' text-white'>Attributes</div>
                <input type="text" className='m-1 rounded-full ps-2 bg-white' placeholder='search'/>
                <span className='text-white text-xl'>+</span>
            </div>
        </div>
    )
}
