let arr = [1, 2, 3, 4, 5];
let index = arr.indexOf(3); // Get the index of the element to remove
if (index !== -1) {
  arr.splice(index, 1); // Remove 1 element at the found index
}
console.log(arr); // Output: [1, 2, 4, 5]
let arr = [1, 2, 3, 4, 5];
arr = arr.filter(element => element !== 3); // Remove the element with a value of 3
console.log(arr); // Output: [1, 2, 4, 5]
let arr = [1, 2, 3, 4, 5];
arr.forEach((element, index) => {
  if (element === 3) {
    arr.splice(index, 1); // Remove 1 element at the current index
  }
});
console.log(arr); // Output: [1, 2, 4, 5]
