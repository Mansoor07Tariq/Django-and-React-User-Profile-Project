import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ProfileForm from './components/ProfileForm';
import ProfileResponse from './components/ProfileResponse';

function App() {
    return (
        <Routes>
            <Route path="/" element={<ProfileForm />} />
            <Route path="/profile-created" element={<ProfileResponse />} />
        </Routes>
    );
}

export default App;
