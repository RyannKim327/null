function findSecondLargest(arr) {
  if (arr.length < 2) {
    return "Array should have at least 2 elements";
  }

  let max = arr[0];
  let secondMax = arr[0];

  for (let i = 1; i < arr.length; i++) {
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
const array = [5, 2, 8, 9, 1];
console.log(findSecondLargest(array)); // Output: 8
