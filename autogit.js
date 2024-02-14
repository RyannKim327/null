function findSecondLargest(arr) {
  let largest = -Infinity;
  let secondLargest = -Infinity;

  for (let i = 0; i < arr.length; i++) {
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
const array = [5, 9, 3, 6, 1, 8, 2];
const secondLargest = findSecondLargest(array);
console.log(secondLargest); // Output: 8
