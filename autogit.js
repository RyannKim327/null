function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const pivot = arr[Math.floor(arr.length / 2)];
  const equal = arr.filter((element) => element === pivot);
  const less = arr.filter((element) => element < pivot);
  const greater = arr.filter((element) => element > pivot);

  return quickSort(less).concat(equal, quickSort(greater));
}

// Example usage:
const arr = [5, 8, 1, 3, 9, 2];
const sortedArr = quickSort(arr);
console.log(sortedArr);
