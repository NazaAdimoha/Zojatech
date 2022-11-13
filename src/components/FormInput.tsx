import React from 'react';

interface FormInputProps {
    name: string;
    placeholder: string;
    label: string;
    type: string;
    errorMsg: string;
}

const FormInput = ({
    name,
    placeholder,
    label,
    type,
    errorMsg,
}: FormInputProps) => {
    return (
        <div className="flex flex-col mb-4">
        <label className="text-sm font-bold mb-2" htmlFor={name}>
            {label}
        </label>
        <input
            className="border rounded-sm px-3 py-2 text-sm focus:outline-none focus:shadow-outline"
            type={type}
            name={name}
            placeholder={placeholder}
            required
        />
        <div className="text-red-500 text-xs italic">{errorMsg}</div>
    </div>
    );
};

export default FormInput;