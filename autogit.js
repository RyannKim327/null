const url = "https://api.example.com/data";

async function fetchData() {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log("Received data:", data);
        // You can process the retrieved data here
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

fetchData();
