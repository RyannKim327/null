let arr = [1, 2, 3, 4, 5];
let indexToRemove = 2;

arr.splice(indexToRemove, 1);

console.log(arr);  // [1, 2, 4, 5]
let arr = [1, 2, 3, 4, 5];
let elementToRemove = 3;

arr = arr.filter(item => item !== elementToRemove);

console.log(arr);  // [1, 2, 4, 5]
let arr = [1, 2, 3, 4, 5];
let elementToRemove = 3;

let indexToRemove = arr.indexOf(elementToRemove);
if (indexToRemove !== -1) {
  arr.splice(indexToRemove, 1);
}

console.log(arr);  // [1, 2, 4, 5]
