function selectionSort(arr) {
  const len = arr.length;
  
  for (let i = 0; i < len; i++) {
    let minIndex = i;
    
    for (let j = i + 1; j < len; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    
    if (minIndex !== i) {
      // Swapping elements
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }
  
  return arr;
}
const arr = [9, 5, 1, 4, 3, 2, 8, 6, 7];
console.log(selectionSort(arr)); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]
