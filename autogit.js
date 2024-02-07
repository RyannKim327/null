// Function to fetch random cat facts using the Cat Facts API
async function getRandomCatFact() {
  try {
    const response = await fetch('https://cat-fact.herokuapp.com/facts/random?animal_type=cat');
    const data = await response.json();
    
    if (data.text) {
      console.log(`Random Cat Fact: ${data.text}`);
    } else {
      console.log('Failed to fetch a cat fact.');
    }
  } catch (error) {
    console.log('An error occurred while fetching a cat fact:', error.message);
  }
}

// Call the function to fetch and display a random cat fact
getRandomCatFact();
