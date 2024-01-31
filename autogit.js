// Fetch API request to get random cat facts
fetch('https://cat-fact.herokuapp.com/facts/random')
  .then(response => response.json())
  .then(data => {
    console.log('Random Cat Fact:', data.text);
  })
  .catch(error => {
    console.log('Error fetching cat fact:', error);
  });
