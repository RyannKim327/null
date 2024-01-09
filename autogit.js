// Original array
const array = [1, 2, 3, 4, 5];

// Reverse the order using the reverse() method
array.reverse();

// Output the reversed array
console.log(array); // [5, 4, 3, 2, 1]
// Original array
const array = [1, 2, 3, 4, 5];

// Create a new reversed array without modifying the original array
const reversedArray = array.slice().reverse();

// Output the reversed array
console.log(reversedArray); // [5, 4, 3, 2, 1]

// Output the original array (not modified)
console.log(array); // [1, 2, 3, 4, 5]
