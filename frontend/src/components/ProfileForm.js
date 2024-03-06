import React, { useState } from 'react';
import FormField from './FormField';
import fieldData from './FieldData';
import { useNavigate } from 'react-router-dom';
import '../styles/animations.css';
import createProfile from '../services/profileApi';

const ProfileForm = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        first_name: '',
        surname: '',
        email: '',
        phone_number: '',
    });
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
        setErrors({ ...errors, [name]: '' });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await createProfile(formData);
            if (response.status === 201) {
                navigate('/profile-created');
            } else {
                alert('Error: ' + JSON.stringify(response.data));
            }
        } catch (error) {
            console.error('Error:', error);
            if (error.response && error.response.data) {
                setErrors(error.response.data);
            } else {
                alert('Error: ' + error.message);
            }
        }
    };

    return (
        <div className="flex justify-center items-center h-screen">
            <div
                className={`p-10 bg-white shadow-lg rounded-md border ${
                    errors.first_name || errors.phone_number || errors.surname || errors.email
                        ? 'border-red-500'
                        : 'border-green-500'
                } w-96`}
            >
                <h1 className="text-blue-500 text-2xl mb-6">CREATE USER PROFILE</h1>
                <form onSubmit={handleSubmit} className="space-y-4">
                    {fieldData.map((field) => (
                        <FormField
                            key={field.name}
                            label={field.label}
                            name={field.name}
                            type={field.name === 'email' ? 'email' : 'text'}
                            value={formData[field.name]}
                            onChange={handleChange}
                            required={field.required}
                            error={errors[field.name]}
                        />
                    ))}
                    <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ProfileForm;
