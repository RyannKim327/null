let arr = [1, 2, 3, 4, 5];
let index = arr.indexOf(3); // Find the index of the element to remove
if (index !== -1) {
   arr.splice(index, 1);  // Remove one element at the found index
}
console.log(arr); // Output: [1, 2, 4, 5]
let arr = [1, 2, 3, 4, 5];
let elementToRemove = 3;
arr = arr.filter(item => item !== elementToRemove);
console.log(arr); // Output: [1, 2, 4, 5]
let arr = [1, 2, 3, 4, 5];
let elementToRemove = 3;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] === elementToRemove) {
        arr.splice(i, 1);
        break; // Stop the loop once the element is removed
    }
}
console.log(arr); // Output: [1, 2, 4, 5]
