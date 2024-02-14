function findSecondLargest(arr) {
  if (arr.length < 2) {
    return "Array should contain at least two elements.";
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
  } else {
    return secondLargest;
  }
}

// Example usage
const myArray = [9, 5, 7, 2, 1, 8];
console.log(findSecondLargest(myArray)); // Output: 8
