import React, { useEffect, useState } from 'react';

const FormField = ({ label, name, type, value, onChange, required, error }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <div className={`flex flex-col ${isVisible ? 'animate-slideIn' : ''}`}>
            <label htmlFor={name} className="text-sm font-medium text-gray-700">
                {label}
            </label>
            <input
                type={type}
                name={name}
                id={name}
                placeholder={label}
                value={value}
                onChange={onChange}
                required={required}
                className={`border rounded-md p-2 ${error ? 'border-red-500' : 'border-gray-300'}`}
            />
            {error && <span className="text-red-500 text-sm">{error}</span>}
        </div>
    );
};

export default FormField;
