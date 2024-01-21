function quicksort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const pivot = arr[0];
  const left = [];
  const right = [];
  
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return quicksort(left).concat(pivot, quicksort(right));
}

// Example usage:
const arr = [5, 3, 8, 4, 2, 1];
const sortedArr = quicksort(arr);
console.log(sortedArr);
