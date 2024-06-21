import React from 'react'
import Eye from '../images/svg/Eye'
import Pencil from '../images/svg/Pencil'
import Bin from '../images/svg/Bin'

export default function TableUI() {

    return (
        <table className="w-full">
            <thead className='text-left bg-yellow-400'>
                <tr>
                    <th className=' py-4 ps-2'>Column Name</th>
                    <th className=' py-4'>Activity Name</th>
                    <th className='hidden md:table-cell py-4'>Status</th>
                    <th className='hidden md:table-cell py-4'>Date</th>
                    <th className='text-center py-4'>Action</th>
                </tr>
            </thead>
            <hr className='border-4'/>
            <tbody>
                <tr className='bg-white'>
                    <td>1.</td>
                    <td>activity 1</td>
                    <td className='hidden md:table-cell'>mark</td>
                    <td className='hidden md:table-cell'>created on</td>
                    <td><div className='flex justify-between'><div><Eye /></div> <div><Pencil /></div><div><Bin /></div> </div></td>
                </tr>
            </tbody>
        </table>
    )
}
