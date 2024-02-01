function shellSort(arr) {
  const n = arr.length;

  // Start with a large gap and reduce it
  for (let gap = Math.floor(n / 2); gap > 0; gap = Math.floor(gap / 2)) {

    // Perform insertion sort on elements with the current gap
    for (let i = gap; i < n; i++) {
      const temp = arr[i];

      let j;
      for (j = i; j >= gap && arr[j - gap] > temp; j -= gap) {
        arr[j] = arr[j - gap];
      }

      arr[j] = temp;
    }
  }

  return arr;
}
const array = [9, 4, 6, 2, 7, 1, 5, 3, 8];
console.log("Original Array:", array);

const sortedArray = shellSort(array);
console.log("Sorted Array:", sortedArray);
