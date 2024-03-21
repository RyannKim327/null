function findSecondLargest(arr) {
  arr.sort(function(a, b){return a - b});
  return arr[arr.length - 2];
}

// Example usage
let array = [10, 5, 8, 20];
let secondLargest = findSecondLargest(array);
console.log("Second largest element: ", secondLargest);
