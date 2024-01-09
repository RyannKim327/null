function findSecondLargest(array) {
  let max = -Infinity;
  let secondMax = -Infinity;

  for (let i = 0; i < array.length; i++) {
    if (array[i] > max) {
      secondMax = max;
      max = array[i];
    } else if (array[i] > secondMax && array[i] < max) {
      secondMax = array[i];
    }
  }

  return secondMax;
}

const array = [5, 2, 10, 7, 3, 8];
const secondLargest = findSecondLargest(array);
console.log(secondLargest); // Output: 8
