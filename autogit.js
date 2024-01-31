let arr = [1, 2, 3, 4, 5];
let element = 3; // remove element 3

// Find the index of the element
let index = arr.indexOf(element);

if (index !== -1) {
  // Remove the element using splice
  arr.splice(index, 1);
}

console.log(arr); // Output: [1, 2, 4, 5]
