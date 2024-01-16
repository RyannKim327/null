function insertionSort(array) {
  // Copy the input array to avoid modifying the original array
  const sortedArray = array.slice();

  for (let i = 1; i < sortedArray.length; i++) {
    const key = sortedArray[i];
    let j = i - 1;

    // Move elements of sortedArray[0...i-1], that are greater than the key,
    // to one position ahead of their current position
    while (j >= 0 && sortedArray[j] > key) {
      sortedArray[j + 1] = sortedArray[j];
      j = j - 1;
    }
    sortedArray[j + 1] = key;
  }

  return sortedArray;
}
const numbers = [5, 3, 8, 1, 2, 7];

console.log("Original array:", numbers);
const sortedNumbers = insertionSort(numbers);
console.log("Sorted array:", sortedNumbers);
Original array: [5, 3, 8, 1, 2, 7]
Sorted array: [1, 2, 3, 5, 7, 8]
