// Make a GET request to a random cat image API
fetch("https://api.thecatapi.com/v1/images/search")
  .then(response => response.json())
  .then(data => {
    const imageUrl = data[0].url;

    // Create an image element
    const image = document.createElement("img");
    image.src = imageUrl;

    // Add the image to the body of the document
    document.body.appendChild(image);

    // Log the image URL to the console
    console.log(imageUrl);
  })
  .catch(error => {
    console.error("Error:", error);
  });
