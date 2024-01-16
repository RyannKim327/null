function quicksort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const pivot = arr[Math.floor(arr.length / 2)];
  const less = [];
  const greater = [];

  for (const element of arr) {
    if (element < pivot) {
      less.push(element);
    } else if (element > pivot) {
      greater.push(element);
    }
  }

  return [...quicksort(less), pivot, ...quicksort(greater)];
}

// Example usage:
const array = [9, 4, 2, 7, 3, 1, 6, 8, 5];
const sortedArray = quicksort(array);
console.log(sortedArray);
