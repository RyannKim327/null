function findSecondLargest(arr) {
  let largest = arr[0];
  let secondLargest = -Infinity;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i];
    } else if (arr[i] > secondLargest && arr[i] !== largest) {
      secondLargest = arr[i];
    }
  }

  return secondLargest;
}

// Example usage
const numbers = [10, 5, 8, 20, 9, 12];
const secondLargest = findSecondLargest(numbers);
console.log(secondLargest); // Output: 12
