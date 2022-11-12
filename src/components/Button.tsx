import { type } from 'os';
import React from 'react';

interface ButtonProps {
    label: string;
    type: 'button' | 'submit' | 'reset';
    onClick: () => void;
}

const Button = ({ label, type, onClick}: ButtonProps) => {
    const getButtonColor = (buttonType: any) => {
        let colorBase = ""
        switch (buttonType) {
            case "primary": 
                colorBase = "{props.theme.colors.primary} hover:bg-blue-400"
            break;
            case "secondary":
                colorBase = "{props.theme.colors.secondary} hover:bg-blue-400"
            break;
            default:
                colorBase = "{props.theme.colors.dark-bg}"    
        }
        return colorBase
    };
    const buttonColor = getButtonColor(type);

    return (
        <button 
            className={`bg-${buttonColor} text-white font-bold py-2 px-4 lg:px-5 lg:py-2.5 mr-2 rounded-sm focus:outline-none focus:shadow-outline`}
            type={type}
            onClick={onClick}
        >
             {label ? label : "Default"}
        </button>
    )
}

export default Button;