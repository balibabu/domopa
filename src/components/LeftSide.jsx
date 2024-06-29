import React, { useContext, useEffect, useState } from 'react'
import Accordion from './Accordion';
import Adjust from '../images/svg/Adjust';
import Lesser from '../images/svg/Lesser';
import Greater from '../images/svg/Greater';
import VariableContext from './Context/VariableContext';
import AppLogo from '../images/framer/AppLogo';
import { LocalStorageJSONModel } from "./Context/LocalStorageJSONModel";
import { useNavigate } from 'react-router-dom';
import Confirmation from './Confirmation';

export default function LeftSide({ smallScreen, showLeftSide, setShowLeftSide }) {
    return (
        <div>
            {
                smallScreen ?
                    <>
                        {showLeftSide && <div className='fixed h-full'>
                            <PageContent />
                            <div className='fixed bottom-2 start-2 cursor-pointer w-8 hover:bg-teal-300 p-1 rounded-full' onClick={() => setShowLeftSide(false)}><Lesser /></div>
                        </div>}
                    </>
                    :
                    <>
                        {showLeftSide && <><PageContent /> <div className='fixed bottom-2 start-2 cursor-pointer w-8 hover:bg-teal-300 p-1 rounded-full' onClick={() => setShowLeftSide(false)}><Lesser /></div></>}
                    </>
            }
            {!showLeftSide && <div className='cursor-pointer bg-teal-500 flex items-center h-full w-4' onClick={() => setShowLeftSide(true)}><Greater /></div>}
        </div>
    )
}

function PageContent() {
    const { model, stack, selected, setSelected } = useContext(VariableContext);
    const [domains, setDomains] = useState({});
    const [operations, setOperations] = useState({});
    const [activities, setActivities] = useState({});
    const navigate = useNavigate();

    useEffect(() => reflectChanges(), [stack]);

    function reflectChanges() {
        try { setDomains({ ...model.readEntry([...stack, 'domains']) } || {}); }
        catch (error) { setDomains([]); }
        try { setOperations({ ...model.readEntry([...stack, 'operations']) } || {}); }
        catch (error) { setOperations([]); }
        try { setActivities({ ...model.readEntry([...stack, 'activities']) } || {}); }
        catch (error) { setActivities([]); }
    }

    function insertData(space, name) {
        model.addEntry([...stack, space, Date.now()], {
            name,
            attributes: { modified: '', },
            space: {},

        })
        reflectChanges();
    }

    function insertInStack(space, key) {
        const routes = [...stack, space, key, 'space']
        navigate(`/${routes.join('/')}`);
    }

    function removeData(space, key) {
        if (Confirmation('are you sure?')) {
            model.deleteEntry([...stack, space, key]);
            reflectChanges();
        }
    }


    return (
        <div className='bg-teal-500 h-full'>
            <button onClick={() => console.log(model.readEntry([]))}>log</button>
            <div className='p-10 grid justify-items-center'>
                <div className='w-12'><AppLogo /></div>
                <div className='font-bold text-xl text-center'>DOMAIN LOGGER</div>
            </div>
            <hr className='border-gray-600' />

            <div className='p-2 flex gap-2'>
                <input type="text" className='rounded-full ps-2 flex-grow outline-teal-600' placeholder='search' />
                <div className='w-6'><Adjust /></div>
            </div>
            <hr className='border-gray-600' />

            <Accordion {...{ title: 'Domains', items: domains, insertInStack, insertData, removeData, setSelected, selected }} />
            <Accordion {...{ title: 'Operations', items: operations, insertInStack, insertData, removeData, setSelected, selected }} />
            <Accordion {...{ title: 'Activities', items: activities, insertInStack, insertData, removeData, setSelected, selected }} />
        </div>

    );
}