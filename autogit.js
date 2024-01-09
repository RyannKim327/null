function findSecondLargest(array) {
  let largest = -Infinity;
  let secondLargest = -Infinity;

  for (let i = 0; i < array.length; i++) {
    const num = array[i];
    if (num > largest) {
      secondLargest = largest;
      largest = num;
    } else if (num > secondLargest && num < largest) {
      secondLargest = num;
    }
  }

  return secondLargest;
}

// Example usage:
const arr = [5, 2, 8, 9, 1];
const secondLargest = findSecondLargest(arr);
console.log(secondLargest); // Output: 8
