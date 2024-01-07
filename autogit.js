function findSecondLargest(arr) {
  // Initialize two variables to store the largest and second largest elements
  let largest = -Infinity;
  let secondLargest = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      // Shift the current largest element to second largest
      secondLargest = largest;
      // Update the largest element
      largest = arr[i];
    } else if (arr[i] < largest && arr[i] > secondLargest) {
      // If the element is smaller than the largest but greater than the second largest
      secondLargest = arr[i];
    }
  }

  return secondLargest;
}

// Example usage
const arr = [5, 10, 3, 8, 2];
const secondLargestElement = findSecondLargest(arr);
console.log(secondLargestElement); // Output: 8
