function findSecondLargest(arr) {
  let largest = -Infinity;
  let secondLargest = -Infinity;

  arr.forEach((element) => {
    if (element > largest) {
      secondLargest = largest;
      largest = element;
    } else if (element > secondLargest && element < largest) {
      secondLargest = element;
    }
  });

  return secondLargest;
}

// Example usage
const array = [5, 10, 3, 8, 2];
const secondLargest = findSecondLargest(array);
console.log(secondLargest); // Output: 8
