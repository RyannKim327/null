function findSecondLargest(arr) {
  let max = -Infinity;
  let secondMax = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      secondMax = max;
      max = arr[i];
    } else if (arr[i] > secondMax && arr[i] !== max) {
      secondMax = arr[i];
    }
  }

  return secondMax;
}

// Example usage:
const array = [1, 3, 8, 4, 9, 6];
const secondLargest = findSecondLargest(array);
console.log(secondLargest); // Output: 8
