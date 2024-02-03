function selectionSort(arr) {
  const length = arr.length;
  
  for (let i = 0; i < length - 1; i++) {
    let minIndex = i;
    
    for (let j = i + 1; j < length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    
    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }
  
  return arr;
}

// Example usage
const array = [64, 25, 12, 22, 11];
const sortedArray = selectionSort(array);
console.log(sortedArray); // [11, 12, 22, 25, 64]
