import React from 'react'

export default function TableUI() {

    return (
        <table className="w-full">
            <thead className='text-left'>
                <tr>
                    <th>Column_name</th>
                    <th>Activity_name</th>
                    <th className='hidden md:table-cell'>Status</th>
                    <th className='hidden md:table-cell'>Date</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr className='bg-white'>
                    <td>1.</td>
                    <td>activity 1</td>
                    <td className='hidden md:table-cell'>mark</td>
                    <td className='hidden md:table-cell'>created on</td>
                    <td>view edit delete</td>
                </tr>
            </tbody>
        </table>
    )
}
