// Import necessary package
const { AsyncTask } = require('android');

// Create an AsyncTask class
class ConnectTask extends AsyncTask {
  constructor(url) {
    super();
    this.url = url;
  }

  onPreExecute() {
    // Runs on the UI thread before the task starts
    console.log("Task starting...");
  }

  doInBackground() {
    // This method runs on a background thread
    return fetch(this.url)
      .then(response => response.json());
  }

  onPostExecute(result) {
    // Runs on the UI thread after the task finishes
    console.log("Task completed!");
    console.log("Result:", result);
  }
}

// Create an instance of the AsyncTask and execute it
const task = new ConnectTask('https://api.example.com/data');
task.execute();
