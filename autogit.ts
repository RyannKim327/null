// TypeScript function to fetch data from an Android backend

async function fetchData(url: string): Promise<void> {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log('Data fetched successfully:', data);
    } catch (error) {
        console.error('Error fetching ', error);
    }
}

// Usage example
const apiUrl = 'http://your-android-backend/api/data';
fetchData(apiUrl);
