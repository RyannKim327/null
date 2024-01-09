let array = [1, 2, 3, 4, 5];
let elementToRemove = 3;

let index = array.indexOf(elementToRemove);
if (index !== -1) {
  array.splice(index, 1);
}
let array = [1, 2, 3, 4, 5];
let elementToRemove = 3;

array = array.filter(element => element !== elementToRemove);
let array = [1, 2, 3, 4, 5];
let elementToRemove = 3;

let index = array.indexOf(elementToRemove);
if (index !== -1) {
  array = array.slice(0, index).concat(array.slice(index + 1));
}
