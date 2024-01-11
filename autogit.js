// Taking input from the user
const userInput = prompt('Enter something:');

// Display message based on the input
if (userInput) {
  console.log(`User entered: ${userInput}`);
  alert('Input received! Thank you.');
} else {
  console.log('No input provided.');
  alert('No input received!');
}
