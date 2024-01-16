function bubbleSort(array) {
  let len = array.length;
  let swapped;

  do {
    swapped = false;

    for (let i = 0; i < len - 1; i++) {
      if (array[i] > array[i + 1]) {
        let temp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temp;
        swapped = true;
      }
    }

    len--;
  } while (swapped);

  return array;
}

// Example usage:
let unsortedArray = [5, 3, 8, 2, 1, 4];
let sortedArray = bubbleSort(unsortedArray);
console.log(sortedArray); // Output: [1, 2, 3, 4, 5, 8]
