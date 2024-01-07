// Import required libraries
const fetch = require('node-fetch');

// Define the AsyncTask class
class AsyncTask {
  constructor(URL) {
    this.URL = URL;
  }

  async connect() {
    try {
      // Make a GET request to the Android backend
      const response = await fetch(this.URL);
      const data = await response.json();

      // Process the response here...
      console.log(data);
    } catch (error) {
      console.log('An error occurred:', error);
    }
  }
}

// Create an instance of the AsyncTask and connect to the Android backend
const asyncTask = new AsyncTask('http://your-android-backend.com/api');
asyncTask.connect();
