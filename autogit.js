import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://example.com/api',
  timeout: 1000,
  headers: {'X-Custom-Header': 'foobar'}
});

instance.get('/users').then((res) => {
  console.log(res.data);
});
