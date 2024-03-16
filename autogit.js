// Simulating an async task in Android
function asyncTask() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Connected successfully!');
    }, 2000);
  });
}

async function connectThroughAsyncTask() {
  try {
    console.log('Connecting to Android through async task...');
    const result = await asyncTask();
    console.log(result);
  } catch (error) {
    console.error('Error connecting through async task:', error);
  }
}

connectThroughAsyncTask();
