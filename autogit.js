function insertionSort(arr) {
  // Start from the second element (index 1)
  for (let i = 1; i < arr.length; i++) {
    let currentElement = arr[i];
    let j = i - 1;

    // Move elements that are greater than the current element to one position ahead
    while (j >= 0 && arr[j] > currentElement) {
      arr[j + 1] = arr[j];
      j--;
    }

    // Insert the current element at the correct position
    arr[j + 1] = currentElement;
  }

  return arr;
}
const array = [5, 3, 1, 4, 2];
const sortedArray = insertionSort(array);
console.log(sortedArray); // Output: [1, 2, 3, 4, 5]
