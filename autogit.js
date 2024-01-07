function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let current = arr[i];
    let j = i - 1;
    
    while (j >= 0 && arr[j] > current) {
      arr[j + 1] = arr[j];
      j--;
    }
    
    arr[j + 1] = current;
  }
  
  return arr;
}

// Example usage:
const array = [6, 5, 3, 1, 8, 7, 2, 4];
console.log("Before sorting:", array);
console.log("After sorting:", insertionSort(array));
