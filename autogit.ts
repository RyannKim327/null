import axios from 'axios';

const fetchData = async (url: string) => {
    try {
        const response = await axios.get(url);
        console.log('Data:', response.data);
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.error('Error message:', error.message);
        } else {
            console.error('Unexpected error:', error);
        }
    }
};

const API_URL = 'https://jsonplaceholder.typicode.com/posts/1';
fetchData(API_URL);
npm install axios
