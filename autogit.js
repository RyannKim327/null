let array = [1, 2, 3, 4, 5];
let element = 3;
let index = array.indexOf(element);
if (index !== -1) {
  array.splice(index, 1);
}
console.log(array); // Output: [1, 2, 4, 5]
let array = [1, 2, 3, 4, 5];
let element = 3;
array = array.filter(item => item !== element);
console.log(array); // Output: [1, 2, 4, 5]
let array = [1, 2, 3, 4, 5];
let element = 3;
for (let i = 0; i < array.length; i++) {
  if (array[i] === element) {
    array.splice(i, 1);
    break;
  }
}
console.log(array); // Output: [1, 2, 4, 5]
