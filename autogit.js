function quicksort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const pivot = arr[Math.floor(arr.length / 2)];
  const less = [];
  const equal = [];
  const greater = [];

  for (const element of arr) {
    if (element < pivot) {
      less.push(element);
    } else if (element > pivot) {
      greater.push(element);
    } else {
      equal.push(element);
    }
  }

  return [...quicksort(less), ...equal, ...quicksort(greater)];
}

// Example usage:
const unsortedArray = [5, 3, 9, 1, 10, 4];
const sortedArray = quicksort(unsortedArray);
console.log(sortedArray); // Outputs: [1, 3, 4, 5, 9, 10]
