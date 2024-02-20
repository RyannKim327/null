// Taking user input
const userInput = prompt("Please enter a string:");

// Function to reverse a string
function reverseString(str) {
    return str.split('').reverse().join('');
}

// Reversing the user input
const reversedString = reverseString(userInput);

// Displaying the reversed string
console.log(`Original string: ${userInput}`);
console.log(`Reversed string: ${reversedString}`);
