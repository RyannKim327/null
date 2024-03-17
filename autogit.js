async function fetchDataFromAndroid() {
  try {
    const response = await fetch('http://your-android-server-url/data');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

fetchDataFromAndroid();
