import React from 'react'
import Greater from '../images/svg/Greater';
import Lesser from '../images/svg/Lesser';
import Plus from '../images/svg/Plus';

export default function RightSide({ smallScreen, showRightSide, setShowRightSide }) {
    return (
        <div>
            {
                smallScreen ?
                    <>
                        {showRightSide && <div className='fixed right-0 bg-white h-full border-s border-gray-600'>
                            <PageContent />
                            <div className='fixed bottom-2 right-2 cursor-pointer w-6' onClick={() => setShowRightSide(false)}><Greater /></div>
                        </div>}
                    </>
                    :
                    <>
                        {showRightSide && <><PageContent /> <div className='fixed bottom-2 right-2 cursor-pointer w-6' onClick={() => setShowRightSide(false)}><Greater /></div></>}
                    </>
            }
            {!showRightSide && <div className='cursor-pointer bg-slate-700 flex items-center text-white h-full w-4' onClick={() => setShowRightSide(true)}><Lesser /></div>}
        </div>
    )
}

function PageContent() {
    return (
        <div>
            <div className='p-3 flex bg-slate-700 gap-2 font-bold'>
                <div className=' text-white'>Attributes</div>
                <input type="text" className='m-1 rounded-full ps-2 bg-white' placeholder='search' />
                <div className='text-white text-xl w-5'><Plus/></div>
            </div>
        </div>
    );
}