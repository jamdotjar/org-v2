import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight, faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';

export default function Sidebar() {
    const [currentBlock, setCurrentBlock] = useState(0);
    const [isMinimized, setIsMinimized] = useState(false);

    const blocksOfText = [
        'The nucleus controls and regulates cell activities. It is here that the DNA from the chromosome is transcribed into RNA, specifically messenger RNA (mRNA), which carries the genetic instructions for protein synthesis. ',
        'Another block of text',
        'Yet another block of text',
    ];

    const sidebarStyle = {
        position: 'fixed',
        top: 0,
        left:  isMinimized ? '-50px' : '0px',
        width: isMinimized ? '50px' : '300px',
        height: '100%',
        backgroundColor: '#f5f5f5',
        overflow: 'auto',
        zIndex: 1000,
        padding: '20px',
        boxShadow: '2px 0px 5px rgba(0,0,0,0.1)',
        transition: 'all 0.3s ease-in-out',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
    };

    const textStyle = {
        opacity: isMinimized ? 0 : 1,
        transition: 'opacity 0.3s ease-in-out',
    };

    const buttonStyle = {
        display: 'flex',
        justifyContent: 'center',
        gap: '10px',
    };

    const arrowButtonStyle = {
        border: 'none',
        background: 'none',
        fontSize: '1.5em',
        cursor: 'pointer',
    };

    const minimizeButtonStyle = {
        position: 'fixed',
        //make the button rotate 90 degrees when minimizingleft: isMinimized ? '20px' : '320px',
        top: '10px',
        border: 'none',
        background: 'none',
        fontSize: '1.5em',
        cursor: 'pointer',
        transition: 'left 0.3s ease-in-out, transform 0.3s cubic-bezier(0.87, 0, 0.13, 1)',
        zIndex: 1001,
        transform: isMinimized ? 'rotate(-90deg)' : 'rotate(0deg)',
        left: isMinimized ? '20px' : '320px',

    };

    return (
        <>
            <div className="sidebar" style={sidebarStyle}>
                <p style={textStyle}>{blocksOfText[currentBlock]}</p>
                <div style={buttonStyle}>
                    <button style={arrowButtonStyle} onClick={() => setCurrentBlock((currentBlock - 1 + blocksOfText.length) % blocksOfText.length)}>
                        <FontAwesomeIcon icon={faArrowLeft} />
                    </button>
                    <button style={arrowButtonStyle} onClick={() => setCurrentBlock((currentBlock + 1) % blocksOfText.length)}>
                        <FontAwesomeIcon icon={faArrowRight} />
                    </button>
                </div>
            </div>
            <button style={minimizeButtonStyle} onClick={() => setIsMinimized(!isMinimized)}>
                <FontAwesomeIcon icon={isMinimized ? faPlus : faMinus} />
                
            </button>
        </>
    );
}