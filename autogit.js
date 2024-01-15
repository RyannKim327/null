function findSecondLargest(arr) {
  let max = -Infinity;
  let secondMax = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      secondMax = max;
      max = arr[i];
    } else if (arr[i] > secondMax && arr[i] !== max) {
      secondMax = arr[i];
    }
  }

  return secondMax;
}
const array = [1, 5, 2, 8, 3, 9, 4, 7, 6];
const secondLargest = findSecondLargest(array);
console.log(secondLargest); // Output: 8
