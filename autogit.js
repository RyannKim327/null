async function fetchData() {
    // Make an asynchronous request to retrieve data
    let data = await fetch('https://jsonplaceholder.typicode.com/posts');
    let jsonData = await data.json();
    
    // Process the retrieved data
    console.log(jsonData);
}

fetchData();
