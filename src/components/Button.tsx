import { type } from 'os';
import React from 'react';

interface ButtonProps {
    label: string;
    type: any;
    size: any;
    onClick: () => void;
}

const Button = ({ label, type, size, onClick}: ButtonProps) => {
    const getButtonColor = (buttonType: any) => {
        let colorBase = "";
        switch (buttonType) {
            case "primary": 
                colorBase = "bg-[#FF8600] hover:bg-blue-400"
            break;
            case "secondary":
                colorBase = "bg-[#FFB800] hover:bg-blue-400"
            break;
            default:
                colorBase = "bg-[#FF8600] hover:bg-blue-400"    
        }
        return colorBase
    };
    const buttonColor = getButtonColor(type);

    const getButtonSize = (buttonSize: any) => {
        let sizes = "";
        switch (buttonSize) {
            case "small": 
                sizes = "px-2 py-2 w-[160px] rounded-lg text-sm"
            break;
            case "large":
                sizes = "px-5 py-2.5"
            break;
            default:
                sizes = "p-[8px 16px 8px 16px]"    
        }
        return sizes
    };
    const buttonSize = getButtonSize(size);

    return (
        <button 
            className={`${buttonColor} text-white font-bold ${buttonSize} mr-2 rounded-sm focus:outline-none focus:shadow-outline`}
            type={type}
            onClick={onClick}
        >
             {label ? label : "Default"}
        </button>
    )
}

export default Button;