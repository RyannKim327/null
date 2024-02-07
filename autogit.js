function findSecondLargest(array) {
  let largest = -Infinity;
  let secondLargest = -Infinity;

  array.forEach((num) => {
    if (num > largest) {
      secondLargest = largest;
      largest = num;
    } else if (num > secondLargest && num !== largest) {
      secondLargest = num;
    }
  });

  return secondLargest;
}

// Example usage:
const arr = [5, 10, 2, 8, 15];
const secondLargest = findSecondLargest(arr);
console.log(secondLargest); // Output: 10
