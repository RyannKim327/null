function findSecondLargest(arr) {
  // Sort the array in descending order
  arr.sort(function(a, b) {
    return b - a;
  });

  // Return the element at index 1
  return arr[1];
}

// Example usage
var myArray = [1, 5, 3, 7, 2, 9];
var secondLargest = findSecondLargest(myArray);
console.log(secondLargest); // Output: 7
