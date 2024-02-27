async function connectToAsyncTask() {
    try {
        const response = await fetch('https://yourandroidapp.com/async-task', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        
        if (!response.ok) {
            throw new Error('Failed to connect to async task');
        }
        
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error connecting to async task:', error);
    }
}

connectToAsyncTask();
