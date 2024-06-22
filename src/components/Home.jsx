import React, { useEffect, useState } from 'react';
import RightSide from './RightSide';
import LeftSide from './LeftSide';
import MiddlePage from './MiddlePage';

export default function Home() {
    const [showLeftSide, setShowLeftSide] = useState(window.innerWidth > 768);
    const [showRightSide, setShowRightSide] = useState(window.innerWidth > 768);
    const [smallScreen, setSmallScreen] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 768) {
                setShowLeftSide(true);
                setShowRightSide(true);
                setSmallScreen(false);
            } else {
                setShowLeftSide(false);
                setShowRightSide(false);
                setSmallScreen(true);
            }
        }
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className='flex h-dvh'>
            <LeftSide {...{ smallScreen, showLeftSide, setShowLeftSide }} />
            <MiddlePage/>
            <RightSide {...{ smallScreen, showRightSide, setShowRightSide }} />
        </div>
    );
}
