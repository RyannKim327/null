function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let currentValue = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > currentValue) {
      arr[j + 1] = arr[j];
      j--;
    }

    arr[j + 1] = currentValue;
  }
  
  return arr;
}

// Example usage:
const unsortedArray = [7, 2, 4, 1, 5, 3];
const sortedArray = insertionSort(unsortedArray);
console.log(sortedArray);
