"use client";

import React, { useState } from "react";

interface CheckBoxProps {
    id: string;
    isChecked?: boolean;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    label?: string;
    width?:number;
	required?: boolean;
}

const CheckBox: React.FC<CheckBoxProps> = ({ id, isChecked = false, onChange = () => {}, label = "", width=20, required=false }) => {
    const [checked, setChecked] = useState(isChecked);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked);
        onChange(event);
    };

    return (
        <div className="inline-flex items-center">
            <label className="flex items-center cursor-pointer relative" htmlFor={id}>
                <input
                    type="checkbox"
                    checked={checked}
                    onChange={handleChange}
                    className={`peer h-[${width}px] w-[${width}px] cursor-pointer transition-all appearance-none rounded shadow hover:shadow-md border border-slate-300 checked:bg-primary checked:focus:bg-primary focus:ring-primary checked:border-primary`}
                    id={id}
					required={required}
                />
                <span
                    className="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor" stroke="currentColor" strokeWidth="1">
                        <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                        />
                    </svg>
                </span>
            </label>
            {label && (
                <label className="cursor-pointer ml-2 text-slate-600 text-sm" htmlFor={id}>
                    {label}
                </label>
            )}
        </div>
    );
};

export default CheckBox;
