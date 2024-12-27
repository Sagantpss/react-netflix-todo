import { useState } from 'react';
import './ToggleSwitch.css';
export const ToggleSwitch = () => {
    const [isOn, setIsOn]= useState(false);
    const checkIson = isOn ? 'on' : 'off';
    const handleToggleClick = () => {
        setIsOn(!isOn);
    }
    return (
        <div className="toggle-switch" style={{backgroundColor: isOn ? '#4caf50' : '#f44336'}} onClick={handleToggleClick}>
            <div className={`switch ${checkIson}`}>
            <span className="switch-state">{checkIson}</span>
            </div>
        </div>
    )
}