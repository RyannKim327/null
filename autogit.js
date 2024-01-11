let arr = [1, 2, 3, 4, 5];
let elementToRemove = 3;

let index = arr.indexOf(elementToRemove);
if (index > -1) {
  arr.splice(index, 1);
}
let arr = [1, 2, 3, 4, 5];
let elementToRemove = 3;

arr = arr.filter(function(value) {
  return value !== elementToRemove;
});
let arr = [1, 2, 3, 4, 5];
let elementToRemove = 3;

let index = arr.indexOf(elementToRemove);
if (index > -1) {
  arr = arr.slice(0, index).concat(arr.slice(index + 1));
}
