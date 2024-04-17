// Function to make a GET request to an API endpoint
async function fetchData(url) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

// URL to connect to an API running on an Android device
const androidApiUrl = "http://10.0.2.2:8080/api/data";

// Call the fetchData function with the Android API URL
fetchData(androidApiUrl);
