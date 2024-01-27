function quicksort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const pivot = arr[Math.floor(arr.length / 2)];
  const smaller = [];
  const equal = [];
  const larger = [];

  for (const element of arr) {
    if (element < pivot) {
      smaller.push(element);
    } else if (element === pivot) {
      equal.push(element);
    } else {
      larger.push(element);
    }
  }

  return quicksort(smaller).concat(equal, quicksort(larger));
}

// Example usage:
const unsortedArray = [5, 3, 8, 4, 2, 1, 6, 7];
const sortedArray = quicksort(unsortedArray);
console.log(sortedArray);
