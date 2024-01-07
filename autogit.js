function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  
  const pivot = arr[arr.length - 1];
  const leftArr = [];
  const rightArr = [];
  
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      leftArr.push(arr[i]);
    } else {
      rightArr.push(arr[i]);
    }
  }
  
  return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
}

// Example usage:
const array = [8, 4, 2, 9, 1, 5];
console.log(quickSort(array)); // Output: [1, 2, 4, 5, 8, 9]
