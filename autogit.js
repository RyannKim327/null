function findSecondLargest(array) {
  let largest = -Infinity;
  let secondLargest = -Infinity;
  
  for (let i = 0; i < array.length; i++) {
    if (array[i] > largest) {
      secondLargest = largest;
      largest = array[i];
    } else if (array[i] > secondLargest && array[i] !== largest) {
      secondLargest = array[i];
    }
  }
  
  return secondLargest;
}

// Example usage
const arr = [5, 10, 3, 8, 15];
const secondLargest = findSecondLargest(arr);
console.log(secondLargest);  // Output: 10
