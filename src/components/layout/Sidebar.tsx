import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
export default function Sidebar() {
    const [currentBlock, setCurrentBlock] = useState(0);

    const blocksOfText = [
        'The nucleus controls and regulates cell activities. It is here that the DNA from the chromosome is transcribed into RNA, specifically messenger RNA (mRNA), which carries the genetic instructions for protein synthesis. ',
        'Another block of text',
        'Yet another block of text',
        // Add as many blocks of text as you want
    ];

    const sidebarStyle = {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '300px',
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

    return (
        <div className="sidebar" style={sidebarStyle}>
            <p>{blocksOfText[currentBlock]}</p>
            <div style={buttonStyle}>
                        <button style={arrowButtonStyle} onClick={() => setCurrentBlock((currentBlock - 1 + blocksOfText.length) % blocksOfText.length)}>
                <FontAwesomeIcon icon={faArrowLeft} />
            </button>
            <button style={arrowButtonStyle} onClick={() => setCurrentBlock((currentBlock + 1) % blocksOfText.length)}>
                <FontAwesomeIcon icon={faArrowRight} />
            </button>
            </div>
        </div>
    );
}