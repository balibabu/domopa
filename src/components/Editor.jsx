import React from 'react'
import Clock from '../images/svg/Clock'
import Pen from '../images/svg/Pen'


export default function Editor() {
    return (
        <div className='h-dvh bg-slate-500'>
            <div className='bg-teal-200'>
                <div className='py-5 px-7'>
                    <div className='text-3xl pb-3 font-bold'>Activity Name</div>
                    <div className='flex gap-3 mb-3'>
                        <div className='w-5'><Clock /></div>
                        <div className='font-semibold'>Created</div>
                        <input type="text" className='ms-5 px-2 outline-teal-300 rounded' />
                    </div>
                    <div className='flex gap-3'>
                        <div className='w-5'><Pen /></div>
                        <div className='font-semibold'>Modified</div>
                        <input type="text" className='ms-3 px-2 outline-teal-300 rounded' />
                    </div>
                </div>
            </div>
            <div className='p-5'>
                <textarea name="" placeholder='Did' className='mb-3 outline-slate-500 px-3 py-2 w-full rounded-xl' rows={10} />
                <textarea name="" placeholder='Next' className='mb-5 outline-slate-500 px-3 py-2 w-full rounded-xl' rows={10} />
                <div className='bg-green-500 w-fit px-10 py-1 font-bold rounded-xl cursor-pointer on hover:bg-green-600'>save</div>
            </div>
        </div>
    )
}
