function findSecondLargest(arr) {
  arr.sort(function(a, b){return b-a});  // Sort the array in descending order
  return arr[1];                         // Return the element at index 1
}

let array = [5, 10, 3, 8, 1];
let secondLargest = findSecondLargest(array);

console.log('Second largest element:', secondLargest);
