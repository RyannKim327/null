function quicksort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const pivot = arr[Math.floor(arr.length / 2)];
  const less = [];
  const greater = [];

  for (const val of arr) {
    if (val < pivot) {
      less.push(val);
    } else if (val > pivot) {
      greater.push(val);
    }
  }

  return [...quicksort(less), pivot, ...quicksort(greater)];
}

// Usage example:
const array = [5, 2, 9, 1, 7, 6, 3];
const sortedArray = quicksort(array);
console.log(sortedArray);
