function findCommonElements(array1, array2) {
  var commonElements = [];
  
  for (var i = 0; i < array1.length; i++) {
    if (array2.includes(array1[i])) {
      commonElements.push(array1[i]);
    }
  }
  
  return commonElements;
}

var array1 = [1, 2, 3, 4, 5];
var array2 = [4, 5, 6, 7, 8];
console.log(findCommonElements(array1, array2)); // Output: [4, 5]
function findCommonElements(array1, array2) {
  return array1.filter(element => array2.includes(element));
}

var array1 = [1, 2, 3, 4, 5];
var array2 = [4, 5, 6, 7, 8];
console.log(findCommonElements(array1, array2)); // Output: [4, 5]
function findCommonElements(array1, array2) {
  var set1 = new Set(array1);
  return array2.filter(element => set1.has(element));
}

var array1 = [1, 2, 3, 4, 5];
var array2 = [4, 5, 6, 7, 8];
console.log(findCommonElements(array1, array2)); // Output: [4, 5]
