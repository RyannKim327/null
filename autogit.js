let myArray = [1, 2, 3, 4, 5]; // original array
myArray.reverse(); // reverse the order

console.log(myArray); // Output: [5, 4, 3, 2, 1]
let myArray = [1, 2, 3, 4, 5]; // original array
let reversedArray = myArray.slice().reverse(); // create a copy and reverse

console.log(myArray); // Output: [1, 2, 3, 4, 5] (original array)
console.log(reversedArray); // Output: [5, 4, 3, 2, 1] (reversed array)
