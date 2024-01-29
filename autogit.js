let array = [1, 2, 3, 4, 5];
let elementToRemove = 3;
let index = array.indexOf(elementToRemove);
if (index > -1) {
  array.splice(index, 1);
}
let array = [1, 2, 3, 4, 5];
let elementToRemove = 3;
array = array.filter(item => item !== elementToRemove);
let array = [1, 2, 3, 4, 5];
let elementToRemove = 3;
for (let i = 0; i < array.length; i++) {
  if (array[i] === elementToRemove) {
    array.splice(i, 1);
    break; // optional, remove this line if you want to remove all occurrences.
  }
}
