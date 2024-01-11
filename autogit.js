let array = [1, 2, 3, 4, 5];
let index = array.indexOf(3); // Find the index of the element you want to remove

if (index !== -1) {
  array.splice(index, 1); // Remove one element at the found index
}

console.log(array); // [1, 2, 4, 5]
