import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight, faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';

export default function Sidebar({ modelType, setModelType, modelOptions }) {
    const [currentBlock, setCurrentBlock] = useState(modelOptions.indexOf(modelType));
    const [isMinimized, setIsMinimized] = useState(false);

    useEffect(() => {
        setCurrentBlock(modelOptions.indexOf(modelType));
    }, [modelType]);
    const blocksOfText = [
        { type: 'Endoplasmic-reticulum', text: 'Text for Endoplasmic-reticulum' },
        { type: 'Nucleus', text: 'Text for Nucleus' },
        { type: 'Golgi', text: 'Text for Golgi' },
        { type: 'Mitochondria', text: 'Text for Mitochondria' },
    ];

    const initialBlockIndex = blocksOfText.findIndex(block => block.type === modelType);

    useEffect(() => {
        const blockIndex = blocksOfText.findIndex(block => block.type === modelType);
        setCurrentBlock(blockIndex);
    }, [modelType]);


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
            <p style={textStyle}>{blocksOfText[currentBlock].text}</p>
            <div style={buttonStyle}>
                <button style={arrowButtonStyle} onClick={() => {
                    const newBlock = (currentBlock - 1 + modelOptions.length) % modelOptions.length;
                    setCurrentBlock(newBlock);
                    setModelType(modelOptions[newBlock]);
                }}>
                    <FontAwesomeIcon icon={faArrowLeft} />
                </button>
                <button style={arrowButtonStyle} onClick={() => {
                    const newBlock = (currentBlock + 1) % modelOptions.length;
                    setCurrentBlock(newBlock);
                    setModelType(modelOptions[newBlock]);
                }}>
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