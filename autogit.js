const requestUrl = "https://example-api.com/data"; // URL to fetch data from

async function fetchData() {
  try {
    const response = await fetch(requestUrl); // Make an asynchronous HTTP request
    const data = await response.json(); // Parse the response as JSON
    console.log(data); // Do something with the fetched data
  } catch (error) {
    console.error(error); // Handle any errors that may occur
  }
}

// Call the async function to fetch data
fetchData();
