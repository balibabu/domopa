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
        createHandler({
            key: inputFieldValue, value: { domains: {}, operations: {}, activities: {} }
        });
        setFormOpen(false);
    }

    function onCreate() {
        setTimeout(() => {
            inputFieldRef.current.focus();
        }, 200);
        collapseHandler(false);
        setFormOpen(true);
    }

    function createUpdateHandler(isNew) {
        if (isNew) {
            createHandler(inputFieldValue);
        } else {
            // updateHandler(inputFieldValue, title);

        }
        setFormOpen(false);
        setInputFieldValue('');
    }

    function onEditClick(item) {
        const poped = deleteHandler(item);
        // setInputFieldValue(poped.title);
        console.log(poped);
    }

    return (
        <div>
            <div className='flex justify-between'>
                <div className='cursor-pointer font-bold p-2 flex gap-1 hover:bg-teal-600 w-full'
                    onClick={() => collapseHandler(!collapsed)}>
                    {collapsed ? <div className='w-6'><Greater /></div> : <div className=' w-6'><Down /></div>} {title}
                </div>
                <div className='cursor-pointer w-10 px-2 hover:bg-teal-600' onClick={onCreate}><Plus /></div>
            </div>
            {!collapsed && <div className='pb-2 px-3'>
                {formOpen && <div className='flex'>
                    <input type="text" className='w-full px-1 bg-teal-300 rounded outline-teal-600' ref={inputFieldRef} value={inputFieldValue} onChange={(e) => setInputFieldValue(e.target.value)} />
                    <div className='w-6 h-6 border mx-1 border-green-300 text-green-900 hover:bg-green-300' onClick={saveHandler}><Check /></div>
                    <div className='w-6 h-6 border border-red-300 text-red-600 hover:bg-red-300' onClick={() => setFormOpen(false)}><Cross /></div>
                </div>}
                {items.map((item, index) => (
                    <div className='flex justify-between' key={index}>
                        <div className='flex gap-1 cursor-pointer hover:bg-teal-300 w-full ps-2 mr-2 rounded-full' onClick={() => clickHandler(item)}><div>{item}</div><div className='w-4 h-6'> <Greater /></div></div>
                        <div className='flex gap-2'>
                            <div className='w-6 hover:bg-teal-300 rounded-full p-1' onClick={() => onEditClick(item)}><Pencil /></div>
                            <div className='w-6 hover:bg-teal-300 rounded-full p-1'><Bin /></div>
                        </div>
                    </div>
                ))}
            </div>}
            <hr className='border-gray-600' />
        </div>
    )
}
