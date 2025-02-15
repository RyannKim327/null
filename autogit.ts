// Define a function to fetch data from the API
async function fetchData(url: string): Promise<void> {
    try {
        const response = await fetch(url);

        // Check if the response is okay (status code 200-299)
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        // Parse the JSON response
        const data = await response.json();

        // Log the data to the console
        console.log(data);
    } catch (error) {
        console.error('Error fetching ', error);
    }
}

// Call the function with a sample API URL
fetchData('https://jsonplaceholder.typicode.com/posts');
