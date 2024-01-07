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
    } else if (element === pivot) {
      equal.push(element);
    } else {
      greater.push(element);
    }
  }
  
  return quicksort(less).concat(equal, quicksort(greater));
}

// Usage example:
const unsortedArray = [43, 21, 1, 9, 23, 5];
const sortedArray = quicksort(unsortedArray);
console.log(sortedArray);
