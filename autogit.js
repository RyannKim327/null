function bubbleSort(array) {
  const length = array.length;

  for (let i = 0; i < length - 1; i++) {
    for (let j = 0; j < length - 1 - i; j++) {
      // Swap elements if the current element is greater than the next element
      if (array[j] > array[j + 1]) {
        const temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }

  return array;
}

// Usage example
const numbers = [8, 1, 6, 3, 9, 2, 5, 7, 4];
const sortedNumbers = bubbleSort(numbers);
console.log(sortedNumbers); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]
