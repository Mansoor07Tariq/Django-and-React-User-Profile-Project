import axios from 'axios';

const createProfile = async (formData) => {
    try {
        const response = await axios.post('http://localhost:8000/api/create-profile/', formData, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        return response;
    } catch (error) {
        throw error;
    }
};

export default createProfile;
