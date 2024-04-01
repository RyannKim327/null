const userInput = prompt("Enter a number:");
const number = parseInt(userInput);

if (!isNaN(number)) {
    console.log(`You entered: ${number}`);
} else {
    console.log("Invalid input. Please enter a number.");
}
