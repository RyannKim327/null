import axios from 'axios';

interface Joke {
  id: string;
  joke: string;
  status: number;
}

async function fetchRandomJoke(): Promise<void> {
  try {
    const response = await axios.get<Joke>('https://icanhazdadjoke.com/', {
      headers: { Accept: 'application/json' }
    });
    console.log('Random Joke:', response.data.joke);
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Axios error:', error.message);
    } else {
      console.error('Unexpected error:', error);
    }
  }
}

fetchRandomJoke();
