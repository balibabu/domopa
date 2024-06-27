import React, { useEffect, useRef, useState } from 'react'
import Greater from '../images/svg/Greater';
import Down from '../images/svg/Down';
import Pencil from '../images/svg/Pencil';
import Bin from '../images/svg/Bin';
import Plus from '../images/svg/Plus';
import Cross from '../images/svg/Cross';
import Check from '../images/svg/Check';

export default function Accordion({ title, items, clickHandler, createHandler, deleteHandler }) {
    const [collapsed, setCollapsed] = useState(localStorage.getItem('accordion-' + title) === 'true');
    const [formOpen, setFormOpen] = useState(false);
    const [inputFieldValue, setInputFieldValue] = useState('');
    const inputFieldRef = useRef(null);
    const [isEditing, setIsEditing] = useState(false);

    function collapseHandler(status) {
        localStorage.setItem('accordion-' + title, status);
        setCollapsed(status);
    }

    function saveHandler() {
        createHandler(inputFieldValue);
        setInputFieldValue('')
        setFormOpen(false);
    }

    function onCreate() {
        setTimeout(() => {
            inputFieldRef.current.focus();
        }, 200);
        collapseHandler(false);
        setFormOpen(true);
    }

    function onEditClick(item) {

    }

    return (
        <div>
            <div className='flex justify-between'>
                <div className='cursor-pointer font-bold p-2 flex gap-1 w-full'
                    onClick={() => collapseHandler(!collapsed)}>
                    {collapsed ? <div className='w-6'><Greater /></div> : <div className=' w-6'><Down /></div>} {title}
                </div>
                <div className='cursor-pointer w-10 px-2' onClick={onCreate}><Plus /></div>
            </div>
            {!collapsed && <div className='ms-9 pb-2 pr-2'>
                {formOpen && <div className='flex'>
                    <input type="text" className='w-full px-1 bg-teal-300 outline-teal-600' ref={inputFieldRef} value={inputFieldValue} onChange={(e) => setInputFieldValue(e.target.value)} />
                    <div className='w-6 h-6 border mx-1 border-green-300 text-green-900 hover:bg-green-300' onClick={saveHandler}><Check /></div>
                    <div className='w-6 h-6 border border-red-300 text-red-600 hover:bg-red-300' onClick={() => setFormOpen(false)}><Cross /></div>
                </div>}
                {items && Object.keys(items).map((key, index) => (
                    <div className='flex justify-between' key={index}>
                        <div className='flex gap-2 cursor-pointer w-full mr-2'><div className='hover:underline underline-offset-2'>{items[key].name}</div><div className='w-4 h-6 hover:opacity-50' onClick={() => clickHandler(key)}> <Greater /></div></div>
                        <div className='flex gap-2'>
                            <div className='w-5' onClick={() => onEditClick(key)}><Pencil /></div>
                            <div className='w-5' onClick={() => deleteHandler(key)}><Bin /></div>
                        </div>
                    </div>
                ))}
            </div>}
            <hr className='border-gray-600' />
        </div>
    )
}
