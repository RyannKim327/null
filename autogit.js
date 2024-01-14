function findSecondLargest(arr) {
  let largest = arr[0];
  let secondLargest = arr[1];

  for (let i = 2; i < arr.length; i++) {
    if (arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i];
    } else if (arr[i] < largest && arr[i] > secondLargest) {
      secondLargest = arr[i];
    }
  }

  return secondLargest;
}

// Test the function
const arr = [5, 10, 2, 8, 15];
console.log(findSecondLargest(arr)); // Output: 10
