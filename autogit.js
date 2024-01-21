function quicksort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const pivot = arr[Math.floor(arr.length / 2)];
  const less = [];
  const equal = [];
  const greater = [];

  for (let element of arr) {
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
const unsortedArray = [5, 3, 8, 4, 2, 9, 1, 7, 6];
const sortedArray = quicksort(unsortedArray);

console.log(sortedArray);
