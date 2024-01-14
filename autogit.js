let largest = -Infinity;
let secondLargest = -Infinity;
for (let i = 0; i < array.length; i++) {
  if (array[i] > largest) {
    secondLargest = largest;
    largest = array[i];
  } else if (array[i] > secondLargest && array[i] < largest) {
    secondLargest = array[i];
  }
}
function findSecondLargest(array) {
  let largest = -Infinity;
  let secondLargest = -Infinity;

  for (let i = 0; i < array.length; i++) {
    if (array[i] > largest) {
      secondLargest = largest;
      largest = array[i];
    } else if (array[i] > secondLargest && array[i] < largest) {
      secondLargest = array[i];
    }
  }

  return secondLargest;
}

// Example usage
const numbers = [12, 35, 1, 10, 34, 50];
const result = findSecondLargest(numbers);
console.log(result); // Output: 35
