// Define an array
var originalArray = [1, 2, 3, 4, 5];

// Create a new array to store the reversed elements
var reversedArray = [];

// Iterate through the original array in reverse order
for (var i = originalArray.length - 1; i >= 0; i--) {
    // Append each element from the original array to the new array
    reversedArray.push(originalArray[i]);
}

// Print the reversed array
console.log(reversedArray);
