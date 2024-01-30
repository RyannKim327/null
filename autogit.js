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
const array = [5, 8, 2, 1, 9, 10, 3];
const sortedArray = quicksort(array);
console.log(sortedArray); // [1, 2, 3, 5, 8, 9, 10]
