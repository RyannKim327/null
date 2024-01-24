function quicksort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const pivot = arr[Math.floor(arr.length / 2)];

  const less = [];
  const equal = [];
  const greater = [];

  for (let num of arr) {
    if (num < pivot) {
      less.push(num);
    } else if (num > pivot) {
      greater.push(num);
    } else {
      equal.push(num);
    }
  }

  return [...quicksort(less), ...equal, ...quicksort(greater)];
}
const unsortedArray = [9, -3, 5, 2, 6, 8, -6, 1, 3];

const sortedArray = quicksort(unsortedArray);

console.log(sortedArray); // Output: [-6, -3, 1, 2, 3, 5, 6, 8, 9]
