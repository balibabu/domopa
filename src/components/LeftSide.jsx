import React, { useContext, useEffect, useState } from 'react'
import logo from '../images/logo.png'
import Accordion from './Accordion';
import Adjust from '../images/svg/Adjust';
import Lesser from '../images/svg/Lesser';
import Greater from '../images/svg/Greater';
import VariableContext from './Context/VariableContext';

export default function LeftSide({ smallScreen, showLeftSide, setShowLeftSide }) {
    return (
        <div>
            {
                smallScreen ?
                    <>
                        {showLeftSide && <div className='fixed h-full'>
                            <PageContent />
                            <div className='fixed bottom-2 start-2 cursor-pointer w-6' onClick={() => setShowLeftSide(false)}><Lesser /></div>
                        </div>}
                    </>
                    :
                    <>
                        {showLeftSide && <><PageContent /> <div className='fixed bottom-2 start-2 cursor-pointer w-6' onClick={() => setShowLeftSide(false)}><Lesser /></div></>}
                    </>
            }
            {!showLeftSide && <div className='cursor-pointer bg-teal-500 flex items-center h-full w-4' onClick={() => setShowLeftSide(true)}><Greater /></div>}
        </div>
    )
}

function PageContent() {
    const { data, stack, insertData, insertInStack } = useContext(VariableContext);
    const [domains, setDomains] = useState([]);
    const [operations, setOperations] = useState([]);
    const [activities, setActivities] = useState([]);

    useEffect(() => {
        let values = { ...data };
        for (let item of stack) {
            values = values[item];
        }
        setDomains(Object.keys(values.domains))
        setOperations(Object.keys(values.operations))
        setActivities(Object.keys(values.activities))
    }, [stack, data]);


    return (
        <div className='bg-teal-500 h-full'>
            <div className='p-10 grid justify-items-center'>
                <div className='w-10'><img src={logo} alt='app logo' /></div>
                <div className='font-bold text-xl text-center'>DOMAIN LOGGER</div>
            </div>
            <hr className='border-gray-600' />

            <div className='p-2 flex gap-2'>
                <input type="text" className='rounded-full ps-2 flex-grow' placeholder='search' />
                <div className='w-6'><Adjust /></div>
            </div>
            <hr className='border-gray-600' />

            <Accordion {...{
                title: 'Domain', items: domains,
                clickHandler: (item) => insertInStack('domains', item),
                createHandler: (newData) => insertData('domains', newData)
            }} />
            <Accordion {...{
                title: 'Operation', items: operations,
                clickHandler: (item) => insertInStack('operations', item),
                createHandler: (newData) => insertData('operations', newData)
            }} />
            <Accordion {...{
                title: 'Activity', items: activities,
                clickHandler: (item) => insertInStack('activities', item),
                createHandler: (newData) => insertData('activities', newData)
            }} />

        </div>

    );
}