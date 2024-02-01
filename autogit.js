async function connectToServer() {
  try {
    const response = await fetch('http://your-server-url');

    if (!response.ok) {
      throw new Error('Connection failed');
    }

    const data = await response.json();

    console.log('Received data:', data);
  } catch (error) {
    console.error('Error connecting to server:', error);
  }
}

connectToServer();
