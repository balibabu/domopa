import React, { useEffect, useState } from 'react';
import RightSide from './RightSide';
import LeftSide from './LeftSide';
import MiddlePage from './MiddlePage';
import LSJSONTester from './LSJSONTester';

export default function Home() {
    const [showLeftSide, setShowLeftSide] = useState(window.innerWidth > 768);
    const [showRightSide, setShowRightSide] = useState(window.innerWidth > 768);
    const [smallScreen, setSmallScreen] = useState(window.innerWidth < 768);

    return (
        <div className='flex h-dvh'>
            {/* <LSJSONTester /> */}
            <LeftSide {...{ smallScreen, showLeftSide, setShowLeftSide }} />
            <MiddlePage />
            <RightSide {...{ smallScreen, showRightSide, setShowRightSide }} />
        </div>
    );
}
