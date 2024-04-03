const url = "http://example.com/api/data";

function fetchData() {
  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then(data => {
      // Process the retrieved data here
      console.log(data);
    })
    .catch(error => {
      console.error("There was a problem with the fetch operation:", error);
    });
}

fetchData();
