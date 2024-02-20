const url = "https://api.example.com/data";
const options = {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
  },
};

async function fetchData() {
  try {
    const response = await fetch(url, options);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error fetching data: ", error);
  }
}

fetchData();
