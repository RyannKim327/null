function findSecondLargest(arr) {
  let largest = -Infinity;
  let secondLargest = null;

  arr.forEach((element) => {
    if (element > largest) {
      secondLargest = largest;
      largest = element;
    } else if (element > secondLargest && element !== largest) {
      secondLargest = element;
    }
  });

  return secondLargest;
}

// Example usage:
const numbers = [5, 10, 3, 8, 1];
const secondLargestNumber = findSecondLargest(numbers);
console.log(secondLargestNumber); // Output: 8
