function insertionSort(array) {
  // Loop through each element in the array
  for (let i = 1; i < array.length; i++) {
    let key = array[i]; // Current element to be compared
    
    let j = i - 1;
    // Compare the current element with the previous elements
    // and shift them to the right if they are greater than the key
    while (j >= 0 && array[j] > key) {
      array[j + 1] = array[j];
      j--;
    }
    
    array[j + 1] = key; // Insert the key at its correct position
  }
  
  return array;
}

// Example usage:
const unsortedArray = [4, 3, 2, 10, 12, 1, 5, 6];
const sortedArray = insertionSort(unsortedArray);
console.log(sortedArray);
