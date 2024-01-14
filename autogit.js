function findSecondLargest(arr) {
  let largest = arr[0];
  let secondLargest = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i];
    } else if (arr[i] < largest && arr[i] > secondLargest) {
      secondLargest = arr[i];
    }
  }

  return secondLargest;
}

// Example usage
const array = [10, 5, 7, 2, 8];
const secondLargest = findSecondLargest(array);
console.log(secondLargest); // Output: 8
