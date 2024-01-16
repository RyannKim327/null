async function connectToAndroidDevice() {
    const url = 'https://example.com/connect'; // Replace with your endpoint

    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error('Failed to connect to Android device.');
        }

        const data = await response.json();
        
        // Process the data from the Android device
        console.log('Data received:', data);

        // Perform further operations or actions if needed

    } catch (error) {
        console.error('Error connecting to Android device:', error.message);
    }
}

connectToAndroidDevice();
