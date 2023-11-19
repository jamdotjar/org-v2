import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight, faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { modelConfig } from '../modelManager';

interface SidebarProps {
    modelType: string;
    setModelType: (modelType: string) => void;
    modelOptions: string[];
}

export default function Sidebar({ modelType, setModelType, modelOptions }: SidebarProps) {
    const [currentBlock, setCurrentBlock] = useState(modelOptions.indexOf(modelType));
    const [isMinimized, setIsMinimized] = useState(false);

    useEffect(() => {
        setCurrentBlock(modelOptions.indexOf(modelType));
    }, [modelType]);

    const currentText = modelConfig[modelType as keyof typeof modelConfig].text;

    const sidebarStyle: React.CSSProperties = {
        position: 'fixed',
        top: 0,
        left:  isMinimized ? '-50px' : '0px',
        width: isMinimized ? '50px' : '300px',
        height: 'calc(100%-1rem)',
        backgroundColor: '#f5f5f5',
        borderRadius: '1rem',
        margin: '1rem 0rem 1rem 1rem',
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
        opacity: isMinimized ? 0 : 1,
        transition: 'opacity 0.3s ease-in-out',
    };

    const minimizeButtonStyle: React.CSSProperties =  {
        position: 'fixed',
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
        <p style={textStyle}>
  {currentText}
</p>
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