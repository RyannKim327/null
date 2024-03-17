let array = [1, 2, 3, 4, 5];
// remove element at index 2 (which is 3 in this case)
array.splice(2, 1);

console.log(array); // Output: [1, 2, 4, 5]
let array = [1, 2, 3, 4, 5];
let elementToRemove = 3;
let newArray = array.filter(item => item !== elementToRemove);

console.log(newArray); // Output: [1, 2, 4, 5]
