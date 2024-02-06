function findSecondLargest(arr) {
  let max = -Infinity;
  let secondMax = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      secondMax = max;
      max = arr[i];
    } else if (arr[i] < max && arr[i] > secondMax) {
      secondMax = arr[i];
    }
  }

  return secondMax;
}

// Example usage:
const array = [5, 2, 8, 9, 1, 3];
console.log(findSecondLargest(array)); // Output: 8
