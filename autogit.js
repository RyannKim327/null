function bubbleSort(arr) {
  let len = arr.length;
  let sorted = false;

  while (!sorted) {
    sorted = true;
    for (let i = 0; i < len - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        // Swap elements
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        sorted = false;
      }
    }
    len--;
  }

  return arr;
}

// Example usage:
let unsortedArray = [5, 2, 8, 1, 4];
console.log(bubbleSort(unsortedArray));
