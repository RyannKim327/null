function selectionSort(arr) {
  const len = arr.length;
  
  for (let i = 0; i < len - 1; i++) {
    let min = i;
    
    for (let j = i + 1; j < len; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    
    if (min !== i) {
      [arr[min], arr[i]] = [arr[i], arr[min]];
    }
  }
  
  return arr;
}

// Example usage:
const array = [64, 25, 12, 22, 11];
const sortedArray = selectionSort(array);
console.log(sortedArray); // Output: [11, 12, 22, 25, 64]
