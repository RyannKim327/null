let array = [1, 2, 3, 4, 5];
let elementToRemove = 3;

let index = array.indexOf(elementToRemove); // Get the index of the element

if (index !== -1) {
  array.splice(index, 1); // Remove the element using splice
}

console.log(array); // Output: [1, 2, 4, 5]
