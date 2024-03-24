const url = "https://api.example.com/data";

function fetchData() {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    
    xhr.open("GET", url, true);
    
    xhr.onload = function () {
      if (xhr.status >= 200 && xhr.status < 300) {
        resolve(xhr.responseText);
      } else {
        reject(xhr.statusText);
      }
    };
    
    xhr.onerror = function () {
      reject(xhr.statusText);
    };
    
    xhr.send();
  });
}

fetchData()
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error("Error fetching data: ", error);
  });
