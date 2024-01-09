// Define the URL of the AsyncTask in Android
const AsyncTaskUrl = 'http://your-domain.com/your-async-task-endpoint';

// Define the data to send to the AsyncTask
const data = {
  key1: 'value1',
  key2: 'value2',
};

// Define the options for the fetch request
const options = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(data),
};

// Send the async request
fetch(AsyncTaskUrl, options)
  .then(response => response.json())
  .then(result => {
    // Handle the result returned by the AsyncTask
    console.log(result);
  })
  .catch(error => {
    // Handle any errors that occurred during the request
    console.error(error);
  });
