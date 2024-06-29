import React from 'react';

const CustomModal = ({ children, isModalOpen, setIsModalOpen, col = 'xl:w-1/2 lg:w-2/3 md:w-3/4 w-11/12', top = '15', opacity = '85', outClick = true }) => {
    return (
        <div>
            {isModalOpen &&
                <div>
                    <div onClick={() => setIsModalOpen(!outClick)}
                        className='fixed top-0 left-0 z-10 w-full h-full bg-black'
                        style={{ opacity: `${opacity}%` }}></div>

                    <div className={`fixed z-20 ${col}`}
                        style={{
                            top: `${top}%`, left: "50%",
                            transform: "translate(-50%, -50%)",
                        }}>
                        {children}
                    </div>
                </div>
            }
        </div>
    );
};

export default CustomModal;
