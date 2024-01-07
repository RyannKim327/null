// Make a GET request to the Random User API
fetch("https://randomuser.me/api/")
  .then(response => response.json())
  .then(data => {
    // Access the user information from the API response
    const user = data.results[0];

    // Display the user information on the webpage
    const container = document.getElementById("user-container");

    const name = document.createElement("h2");
    name.textContent = `${user.name.title} ${user.name.first} ${user.name.last}`;

    const email = document.createElement("p");
    email.textContent = `Email: ${user.email}`;

    const picture = document.createElement("img");
    picture.setAttribute("src", user.picture.large);

    container.appendChild(picture);
    container.appendChild(name);
    container.appendChild(email);
  })
  .catch(error => {
    console.log("An error occurred:", error);
  });
