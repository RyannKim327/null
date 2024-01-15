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

// Usage example
const array = [10, 20, 30, 40, 50];
const secondLargest = findSecondLargest(array);
console.log("Second largest element: " + secondLargest); // Output: 40
