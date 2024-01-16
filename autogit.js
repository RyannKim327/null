function shellSort(array) {
  // Create the gap sequence
  let gap = 1;
  while (gap < array.length / 3) {
    gap = gap * 3 + 1;
  }

  while (gap > 0) {
    for (let i = gap; i < array.length; i++) {
      let temp = array[i];
      let j = i;

      while (j >= gap && array[j - gap] > temp) {
        array[j] = array[j - gap];
        j -= gap;
      }

      array[j] = temp;
    }

    gap = Math.floor(gap / 3);
  }
  
  return array;
}

// Example usage
const unsortedArray = [7, 3, 9, 4, 1, 5];
console.log(shellSort(unsortedArray)); // Output: [1, 3, 4, 5, 7, 9]
