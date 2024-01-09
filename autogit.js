function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  
  const pivot = arr[Math.floor(arr.length / 2)];
  const left = [];
  const right = [];
  
  for (const element of arr) {
    if (element < pivot) {
      left.push(element);
    } else if (element > pivot) {
      right.push(element);
    }
  }
  
  return quickSort(left).concat(pivot, quickSort(right));
}

// Example usage:
const array = [5, 9, 2, 1, 7, 6, 3];
console.log(quickSort(array)); // Output: [1, 2, 3, 5, 6, 7, 9]
