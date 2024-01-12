function findSecondLargest(arr) {
  let max = Number.NEGATIVE_INFINITY;
  let secondMax = Number.NEGATIVE_INFINITY;

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
const array = [5, 10, 2, 8, 9];
const secondLargest = findSecondLargest(array);
console.log(secondLargest); // Output: 9
