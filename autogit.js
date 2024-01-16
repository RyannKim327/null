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

// Example usage:
const array = [5, 8, 1, 2, 10, 3, 6];
const secondLargest = findSecondLargest(array);
console.log(secondLargest); // Output: 8
