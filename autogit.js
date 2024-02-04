function findSecondLargest(arr) {
  if (arr.length < 2) {
    return "Array should have at least two elements.";
  }

  let largest = arr[0];
  let secondLargest = -Infinity;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i];
    } else if (arr[i] > secondLargest && arr[i] < largest) {
      secondLargest = arr[i];
    }
  }

  if (secondLargest === -Infinity) {
    return "There is no second largest element in the array.";
  }

  return secondLargest;
}

// Example usage:
const arr = [1, 5, 3, 2, 8, 7];
const secondLargest = findSecondLargest(arr);
console.log(secondLargest); // Output: 7
