import axios from 'axios';

interface User {
    id: number;
    name: string;
    username: string;
    email: string;
}

const fetchUsers = async (): Promise<void> => {
    try {
        const response = await axios.get<User[]>('https://jsonplaceholder.typicode.com/users');
        const users = response.data;

        console.log('User List:');
        users.forEach(user => {
            console.log(`ID: ${user.id}, Name: ${user.name}, Username: ${user.username}, Email: ${user.email}`);
        });
    } catch (error) {
        console.error('Error fetching users:', error);
    }
};

fetchUsers();
