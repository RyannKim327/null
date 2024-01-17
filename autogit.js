function bubbleSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);

  return arr;
}

// Example usage:
const array = [5, 2, 8, 10, 1];
console.log("Original array:", array);
console.log("Sorted array:", bubbleSort(array.slice()));
