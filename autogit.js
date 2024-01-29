// Make a GET request to the JSONPlaceholder API
fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(data => {
    // Display the fetched data
    data.forEach(post => {
      console.log(`Post ID: ${post.id}`);
      console.log(`Title: ${post.title}`);
      console.log(`Body: ${post.body}\n`);
    });
  })
  .catch(error => {
    console.error('Error:', error);
  });
