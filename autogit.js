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
  
  return quicksort(less).concat(equal, quicksort(greater));
}

// Example usage:
const array = [4, 2, 7, 1, 3];
console.log(quicksort(array)); // Output: [1, 2, 3, 4, 7]
