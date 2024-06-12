import React from 'react';
import './Marble.css';

export interface MarbleProps {
    char: string;
}

export const Marble = ({ char }: MarbleProps) => {
    const className = char === '-' ? 'dash' : char === '|' ? 'vertical-bar' : char;
    return (
        <span className={`marble ${className}`}>
            {char !== '-' ? char : ''}
        </span>
    );
};