function bubbleSort(array) {
  const length = array.length;

  for(let i = 0; i < length - 1; i++) {
    let swapped = false;

    for(let j = 0; j < length - 1 - i; j++) {
      if(array[j] > array[j+1]) {
        // Swap elements
        [array[j], array[j+1]] = [array[j+1], array[j]];
        swapped = true;
      }
    }

    if(!swapped) {
      // No more swaps, the array is sorted
      break;
    }
  }

  return array;
}

// Usage example
const numbers = [5, 3, 8, 4, 2];
console.log(bubbleSort(numbers));  // Output: [2, 3, 4, 5, 8]
