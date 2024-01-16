function shellSort(array) {
  const len = array.length;
  let increment = Math.floor(len / 2);

  // Iterate over gaps
  while (increment > 0) {
    for (let i = increment; i < len; i++) {
      const temp = array[i];
      let j = i;

      // Sort the sub-array using insertion sort
      while (j >= increment && array[j - increment] > temp) {
        array[j] = array[j - increment];
        j -= increment;
      }

      array[j] = temp;
    }

    increment = Math.floor(increment / 2);
  }

  return array;
}

// Example usage:
const arr = [9, 4, 7, 2, 1, 5, 3, 6, 8];
console.log(shellSort(arr));
