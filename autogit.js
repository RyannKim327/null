async function connectAsync() {
  try {
    const response = await fetch('https://api.example.com/data'); // Make an HTTP request
    
    if (response.ok) {
      const data = await response.json(); // Get the response data
      
      // Process the data
      console.log(data);
      
      // Perform any additional tasks
      // ...
      
    } else {
      console.error('Error:', response.status);
    }
  } catch (error) {
    console.error('Error:', error);
  }
}

// Call the async task function
connectAsync();
