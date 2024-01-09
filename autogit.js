function shellSort(array) {
  // ...
}
function shellSort(array) {
  let gap = Math.floor(array.length / 2);
  // ...
}
function shellSort(array) {
  let gap = Math.floor(array.length / 2);

  while (gap > 0) {
    // Shell sort algorithm steps
    // ...
    gap = Math.floor(gap / 2);
  }
}
function shellSort(array) {
  let gap = Math.floor(array.length / 2);

  while (gap > 0) {
    for (let i = gap; i < array.length; i++) {
      let j = i;

      while (j >= gap && array[j - gap] > array[j]) {
        // Swap elements
        let temp = array[j];
        array[j] = array[j - gap];
        array[j - gap] = temp;

        j -= gap;
      }
    }

    gap = Math.floor(gap / 2);
  }
}
function shellSort(array) {
  let gap = Math.floor(array.length / 2);

  while (gap > 0) {
    for (let i = gap; i < array.length; i++) {
      let j = i;

      while (j >= gap && array[j - gap] > array[j]) {
        // Swap elements
        let temp = array[j];
        array[j] = array[j - gap];
        array[j - gap] = temp;

        j -= gap;
      }
    }

    gap = Math.floor(gap / 2);
  }

  return array;
}
let array = [8, 4, 1, 6, 10, 2];
let sortedArray = shellSort(array);
console.log(sortedArray); // Output: [1, 2, 4, 6, 8, 10]
