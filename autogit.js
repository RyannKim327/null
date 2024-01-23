function findSecondLargest(array) {
  let max = Number.NEGATIVE_INFINITY;
  let secondMax = Number.NEGATIVE_INFINITY;

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

// Test the function
const array = [2, 5, 8, 3, 10];
const secondLargest = findSecondLargest(array);
console.log("Second Largest: " + secondLargest);
Second Largest: 8
