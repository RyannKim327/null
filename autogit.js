// Async function to connect to Android device
async function connectToAndroid() {
    try {
        const response = await fetch('https://example.com/android/device');
        const data = await response.json();
        
        console.log('Connected to Android device:', data);
    } catch (error) {
        console.error('Error connecting to Android device:', error);
    }
}

// Call the function to connect to Android device
connectToAndroid();
