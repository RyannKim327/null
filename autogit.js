function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const pivot = arr[Math.floor(arr.length / 2)];
  const lesser = [];
  const greater = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < pivot) {
      lesser.push(arr[i]);
    } else if (arr[i] > pivot) {
      greater.push(arr[i]);
    }
  }

  return [...quickSort(lesser), pivot, ...quickSort(greater)];
}

// Example usage:
const array = [5, 3, 1, 6, 4, 2];
const sortedArray = quickSort(array);
console.log(sortedArray);
