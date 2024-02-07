// Make a GET request to the Quote API and fetch a random quote
fetch('https://api.quotable.io/random')
  .then(response => response.json())
  .then(data => {
    // Display the quote and its author on the webpage
    const quote = data.content;
    const author = data.author;
    console.log(`${quote} - ${author}`);

    // You can manipulate the DOM to display the quote on a webpage
    // For example, create a new <p> element and append the quote to it
    const quoteElement = document.createElement('p');
    quoteElement.textContent = `${quote} - ${author}`;
    document.body.appendChild(quoteElement);
  })
  .catch(error => {
    console.log('Error:', error);
  });
