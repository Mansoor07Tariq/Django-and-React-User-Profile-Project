import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProfileResponse = () => {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col justify-center h-screen items-center">
            <h1 className="text-green-500 text-2xl mb-4">Profile created successfully!</h1>
            <button
                onClick={() => navigate('/')}
                className="bg-blue-500 text-white py-2 px-4 rounded-md"
            >
                Back to Create Profile
            </button>
        </div>
    );
};

export default ProfileResponse;
