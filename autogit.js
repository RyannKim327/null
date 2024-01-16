function findSecondLargest(arr) {
  let largest = -Infinity;
  let secondLargest = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i];
    } else if (arr[i] > secondLargest && arr[i] < largest) {
      secondLargest = arr[i];
    }
  }

  return secondLargest;
}

// Example usage:
const array = [1, 3, 2, 5, 8, 4];
const secondLargest = findSecondLargest(array);
console.log("Second largest element:", secondLargest);
