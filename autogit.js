const fetchAPI = async () => {
  try {
    const response = await fetch("https://api.example.com/data");
    const data = await response.json();
    console.log(data);
    // Perform other operations with the received data
  } catch (error) {
    console.error(error);
  }
};

fetchAPI();
