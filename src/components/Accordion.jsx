import React, { useEffect, useRef, useState } from 'react'
import Greater from '../images/svg/Greater';
import Down from '../images/svg/Down';
import Pencil from '../images/svg/Pencil';
import Bin from '../images/svg/Bin';
import Plus from '../images/svg/Plus';
import Cross from '../images/svg/Cross';
import Check from '../images/svg/Check';

export default function Accordion({ title, items, clickHandler, createHandler }) {
    const [collapsed, setCollapsed] = useState(localStorage.getItem('accordion-' + title) === 'true');
    const [formOpen, setFormOpen] = useState(false);
    const [inputFieldValue, setInputFieldValue] = useState('');
    const inputField = useRef(null);

    function collapseHandler(status) {
        localStorage.setItem('accordion-' + title, status);
        setCollapsed(status);
        console.log(status);
        console.log(localStorage.getItem('accordion-' + title));
    }

    function saveHandler() {
        createHandler(inputFieldValue);
        setFormOpen(false);
    }

    function onCreate() {
        setTimeout(() => {
            inputField.current.focus();
        }, 200);
        collapseHandler(false);
        setFormOpen(true);
    }

    return (
        <div>
            <div className='flex justify-between'>
                <div className='cursor-pointer font-bold p-2 flex gap-1 hover:opacity-80' onClick={() => collapseHandler(!collapsed)}>{collapsed ? <div className='w-6'><Greater /></div> : <div className=' w-6'><Down /></div>} {title}</div>
                <div className='cursor-pointer w-5 mr-2' onClick={onCreate}><Plus /></div>
            </div>
            {!collapsed && <div className='pb-2 px-3'>
                {formOpen && <div className='flex'>
                    <input type="text" className='w-full px-1' ref={inputField} value={inputFieldValue} onChange={(e) => setInputFieldValue(e.target.value)} />
                    <div className='w-6 h-6 border mx-1 text-green-900 hover:bg-green-300' onClick={saveHandler}><Check /></div>
                    <div className='w-6 h-6 border text-red-600 hover:bg-red-300' onClick={() => setFormOpen(false)}><Cross /></div>
                </div>}
                {items.map((item, index) => (
                    <div className='flex justify-between' key={index}>
                        <div className='flex gap-1 hover:underline underline-offset-2'><div onClick={() => clickHandler(item)}>{item}</div><div className='w-4 h-6'> <Greater /></div></div>
                        <div className='flex gap-2'>
                            <div className='w-6'><Pencil /></div>
                            <div className='w-6'><Bin /></div>
                        </div>
                    </div>
                ))}
            </div>}
            <hr className='border-gray-600' />
        </div>
    )
}
