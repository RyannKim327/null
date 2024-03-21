function findSecondLargest(arr) {
  arr.sort(function(a, b) {
    return b - a;
  });
  
  return arr[1];
}

// Example usage
const array = [10, 5, 8, 20, 15];
const secondLargest = findSecondLargest(array);

console.log("Second largest element in the array is: " + secondLargest);
Second largest element in the array is: 15
