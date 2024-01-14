function findSecondLargest(array) {
  let largest = Number.MIN_SAFE_INTEGER;
  let secondLargest = Number.MIN_SAFE_INTEGER;

  array.forEach((element) => {
    if (element > largest) {
      secondLargest = largest;
      largest = element;
    } else if (element > secondLargest && element < largest) {
      secondLargest = element;
    }
  });

  return secondLargest;
}

// Usage:
const array = [10, 5, 8, 20, 9];
const secondLargest = findSecondLargest(array);
console.log("Second largest element:", secondLargest);
