function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let key = arr[i];
    let j = i - 1;
    
    // Move elements of `arr[0..i-1]`, that are greater than `key`, to one position ahead of their current position
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }
    
    arr[j + 1] = key;
  }
  
  return arr;
}

// Example usage:
let array = [5, 2, 6, 1, 3, 9];
console.log(insertionSort(array)); // Output: [1, 2, 3, 5, 6, 9]
