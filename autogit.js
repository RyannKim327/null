// Function to perform insertion sort
function insertionSort(array) {
  const length = array.length;
  
  for (let i = 1; i < length; i++) {
    let key = array[i];
    let j = i - 1;

    // Move elements of array[0..i-1], that are greater than key, to one position ahead
    // of their current position
    while (j >= 0 && array[j] > key) {
      array[j + 1] = array[j];
      j = j - 1;
    }
    array[j + 1] = key;
  }
  
  return array;
}

// Test the insertion sort function
const array = [5, 2, 4, 6, 1, 3];
console.log(insertionSort(array)); // Output: [1, 2, 3, 4, 5, 6]
