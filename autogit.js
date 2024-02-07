function quicksort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const pivot = arr[Math.floor(arr.length / 2)];

  const less = arr.filter((value) => value < pivot);
  const equal = arr.filter((value) => value === pivot);
  const greater = arr.filter((value) => value > pivot);

  return [...quicksort(less), ...equal, ...quicksort(greater)];
}
const array = [5, 8, 2, 1, 6, 3, 7, 4];
const sortedArray = quicksort(array);
console.log(sortedArray);
[1, 2, 3, 4, 5, 6, 7, 8]
