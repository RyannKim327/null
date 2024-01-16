function quicksort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const pivot = arr[Math.floor(arr.length / 2)];
  const less = [];
  const equal = [];
  const greater = [];

  for (const value of arr) {
    if (value < pivot) {
      less.push(value);
    } else if (value > pivot) {
      greater.push(value);
    } else {
      equal.push(value);
    }
  }

  return [...quicksort(less), ...equal, ...quicksort(greater)];
}

// Example usage
const unsortedArray = [5, 9, 2, 8, 3, 7, 4, 6, 1];
const sortedArray = quicksort(unsortedArray);
console.log(sortedArray);
