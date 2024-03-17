// Define a function that performs a network request asynchronously
function fetchData() {
    return new Promise((resolve, reject) => {
        const url = "https://api.example.com/data";
        
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                return response.json();
            })
            .then(data => resolve(data))
            .catch(error => reject(error));
    });
}

// Execute the async task when a button is clicked
document.getElementById("fetchDataButton").addEventListener("click", async () => {
    try {
        const data = await fetchData();
        console.log("Data received:", data);
        // Perform further operations with the received data
    } catch (error) {
        console.error("Error fetching data:", error);
    }
});
