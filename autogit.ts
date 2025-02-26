// Assuming you have a back-end API running
const apiUrl = 'http://your-api-url/api/data';

// An asynchronous function to fetch data from the API
async function fetchData() {
    try {
        const response = await fetch(apiUrl);
        
        // Check if the response is OK (status code in the range 200-299)
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        console.log('Data fetched successfully:', data);
    } catch (error) {
        console.error('Error fetching ', error);
    }
}

// Call the fetchData function
fetchData();
