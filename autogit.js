function findSecondLargest(arr) {
  let largest = -Infinity;
  let secondLargest = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i];
    } else if (arr[i] < largest && arr[i] > secondLargest) {
      secondLargest = arr[i];
    }
  }

  return secondLargest;
}

const array = [5, 2, 9, 1, 7, 6];
const secondLargest = findSecondLargest(array);

console.log(secondLargest); // Output: 7
