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

// Usage example:
const arr = [4, 2, 9, 5, 1, 8];
const secondLargest = findSecondLargest(arr);
console.log(secondLargest); // Output: 8
