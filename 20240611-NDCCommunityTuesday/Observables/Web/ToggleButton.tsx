import React, { useState, ReactNode } from 'react';
import './ToggleButton.css';

export type Toggled = (isToggled: boolean) => void;

export interface ToggleButtonProps {
    children?: ReactNode;
    onToggle?: Toggled;
}

export const ToggleButton = ({ children, onToggle }: ToggleButtonProps) => {
    const [isToggled, setIsToggled] = useState(false);

    return (
        <button
            className={`toggle-button ${isToggled ? 'toggled' : ''}`}
            onClick={() => {
                const toggled = !isToggled;
                setIsToggled(toggled);
                onToggle?.(toggled);
            }}>
            {children}
        </button>
    );
};
