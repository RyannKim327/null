function selectionSort(array) {
  // ...
}
function selectionSort(array) {
  const n = array.length;
  // ...
}
function selectionSort(array) {
  const n = array.length;
  
  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;
    // ...
  }
}
function selectionSort(array) {
  const n = array.length;
  
  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;
    
    for (let j = i + 1; j < n; j++) {
      if (array[j] < array[minIndex]) {
        minIndex = j;
      }
    }
    // ...
  }
}
function selectionSort(array) {
  const n = array.length;
  
  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;
    
    for (let j = i + 1; j < n; j++) {
      if (array[j] < array[minIndex]) {
        minIndex = j;
      }
    }
    
    if (minIndex !== i) {
      [array[i], array[minIndex]] = [array[minIndex], array[i]];
    }
  }
  
  return array;
}
function selectionSort(array) {
  const n = array.length;
  
  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;
    
    for (let j = i + 1; j < n; j++) {
      if (array[j] < array[minIndex]) {
        minIndex = j;
      }
    }
    
    if (minIndex !== i) {
      [array[i], array[minIndex]] = [array[minIndex], array[i]];
    }
  }
  
  return array;
}

// Example usage:
const arr = [64, 25, 12, 22, 11];
console.log(selectionSort(arr)); // Output: [11, 12, 22, 25, 64]
