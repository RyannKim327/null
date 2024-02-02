// Random Quote Generator using an API

// Function to fetch a random quote from an API
async function getRandomQuote() {
  const response = await fetch('https://api.quotable.io/random');
  const data = await response.json();
  return data.content;
}

// Function to display the random quote
async function displayRandomQuote() {
  try {
    const quote = await getRandomQuote();
    console.log("Random Quote:", quote);
    // You can display the quote on your webpage using DOM manipulation
    // For example, update a div element with the quote text
    document.getElementById('quote').innerText = quote;
  } catch (error) {
    console.log("Error:", error);
  }
}

// Call the displayRandomQuote function to fetch and display a random quote
displayRandomQuote();
