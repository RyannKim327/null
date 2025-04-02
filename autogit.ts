import axios, { AxiosResponse } from 'axios';

async function fetchData(): Promise<void> {
  try {
    const response: AxiosResponse = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
    console.log(response.data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

fetchData();
