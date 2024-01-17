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

const array = [5, 3, 9, 1, 7];
const result = findSecondLargest(array);

console.log('Second largest element:', result);
