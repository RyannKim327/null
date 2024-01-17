// Function to fetch data from the API
async function fetchData(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log('Error:', error);
  }
}

// API endpoint
const apiUrl = 'https://jsonplaceholder.typicode.com/posts';

// Fetch data from the API
fetchData(apiUrl)
  .then(posts => {
    // Display the fetched data
    posts.forEach(post => {
      console.log(`Post ID: ${post.id}`);
      console.log(`Title: ${post.title}`);
      console.log(`Body: ${post.body}`);
      console.log('-------------');
    });
  });
