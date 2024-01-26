function findSecondLargest(arr) {
  let largest = arr[0];
  let secondLargest = arr[1];

  for (let i = 2; i < arr.length; i++) {
    if (arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i];
    } else if (arr[i] > secondLargest && arr[i] !== largest) {
      secondLargest = arr[i];
    }
  }

  return secondLargest;
}

// Example usage
const array = [5, 8, 2, 10, 3];
const secondLargest = findSecondLargest(array);
console.log(secondLargest); // Output: 8
