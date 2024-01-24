function findCommonElements(array1, array2) {
  var commonElements = [];
  for (var i = 0; i < array1.length; i++) {
    if (array2.includes(array1[i])) {
      commonElements.push(array1[i]);
    }
  }
  return commonElements;
}
function findCommonElements(array1, array2) {
  return array1.filter(function (value) {
    return array2.includes(value);
  });
}
function findCommonElements(array1, array2) {
  var set = new Set(array2);
  return array1.filter(function (value) {
    return set.has(value);
  });
}
var arr1 = [1, 2, 3, 4, 5];
var arr2 = [4, 5, 6, 7, 8];

var commonElements = findCommonElements(arr1, arr2);
console.log(commonElements); // Output: [4, 5]
