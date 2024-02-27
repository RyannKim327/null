function quicksort(arr) {
  if (arr.length <= 1) {
    return arr;
  } else {
    const pivot = arr[0];
    const left = [];
    const right = [];

    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < pivot) {
        left.push(arr[i]);
      } else {
        right.push(arr[i]);
      }
    }

    return quicksort(left).concat(pivot, quicksort(right));
  }
}

const unsortedArray = [5, 2, 9, 3, 7, 6, 1, 8, 4];
const sortedArray = quicksort(unsortedArray);

console.log(sortedArray); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]
