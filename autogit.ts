import axios, { AxiosResponse } from 'axios';

// Define the shape of the expected response data
interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

// Asynchronous function to get a Todo item
async function fetchTodo(id: number): Promise<Todo | null> {
  try {
    const response: AxiosResponse<Todo> = await axios.get<Todo>(`https://jsonplaceholder.typicode.com/todos/${id}`);
    console.log('Fetched Todo:', response.data);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Axios error:', error.message);
    } else {
      console.error('Unexpected error:', error);
    }
    return null;
  }
}

// Call the function
fetchTodo(1);
