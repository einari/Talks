import React from 'react';
import './MarbleDiagram.css';
import { Marble } from './Marble';

interface MarbleDiagramProps {
    diagram: string;
}

const MarbleDiagram = ({ diagram }: MarbleDiagramProps) => {
    return (
        <div className="marble-diagram">
            {diagram.split('').map((char, index) => {
                return (
                    <Marble key={index} char={char} />
                );
            })}
        </div>
    );
};

export default MarbleDiagram;
