const fetchAndroidBackendData = async () => {
    try {
        const response = await fetch('http://your-android-backend-url/data');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error fetching data from Android backend:', error);
    }
};

fetchAndroidBackendData();
