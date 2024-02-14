var array = [1, 2, 3, 4, 5];
var elementToRemove = 3;
var index = array.indexOf(elementToRemove);
if (index > -1) {
  array.splice(index, 1);
}
console.log(array); // Output: [1, 2, 4, 5]
var array = [1, 2, 3, 4, 5];
var elementToRemove = 3;
array = array.filter(function(value){
  return value !== elementToRemove;
});
console.log(array); // Output: [1, 2, 4, 5]
