function findSecondLargest(arr) {
  if (arr.length < 2) {
    return 'Array should have at least two elements.';
  }

  let largest = arr[0];
  let secondLargest = arr[1];

  if (largest < secondLargest) {
    [largest, secondLargest] = [secondLargest, largest];
  }

  for (let i = 2; i < arr.length; i++) {
    if (arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i];
    } else if (arr[i] > secondLargest && arr[i] < largest) {
      secondLargest = arr[i];
    }
  }

  return secondLargest;
}

// Example usage
const arr = [10, 40, 20, 50, 30];
const secondLargest = findSecondLargest(arr);
console.log(secondLargest);  // Output: 40
