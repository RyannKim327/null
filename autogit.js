function findSecondLargest(arr) {
  arr.sort(function(a, b) {
    return b - a;
  });
  
  return arr[1];
}

// Example array
let array = [5, 2, 8, 10, 3];

// Find the second largest element
let secondLargest = findSecondLargest(array);
console.log(secondLargest); // Output: 8
