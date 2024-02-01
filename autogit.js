function findSecondLargest(arr) {
  let max = -Infinity;
  let secondMax = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      secondMax = max;
      max = arr[i];
    } else if (arr[i] > secondMax && arr[i] < max) {
      secondMax = arr[i];
    }
  }

  return secondMax;
}

// Example usage
const arr = [1, 3, 5, 9, 2, 7, 6];
const secondLargest = findSecondLargest(arr);
console.log(secondLargest); // Output: 7
