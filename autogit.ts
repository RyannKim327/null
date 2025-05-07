// Example TypeScript async function to fetch data
async function fetchData(url: string): Promise<any> {
  try {
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Failed to fetch data:', error);
    throw error;
  }
}

// Usage example
(async () => {
  try {
    const apiUrl = 'https://jsonplaceholder.typicode.com/todos/1';
    const result = await fetchData(apiUrl);
    console.log('Fetched data:', result);
  } catch (error) {
    console.error('Error fetching the API data:', error);
  }
})();
