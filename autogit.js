function shellSort(arr) {
  // Calculate the gap (initial value of h)
  let n = arr.length;
  let gap = Math.floor(n / 2);

  // Perform an insertion sort for each gap value
  while (gap > 0) {
    for (let i = gap; i < n; i++) {
      let temp = arr[i];
      let j = i;

      // Shift elements until the correct position for the current element is found
      while (j >= gap && arr[j - gap] > temp) {
        arr[j] = arr[j - gap];
        j -= gap;
      }

      arr[j] = temp;
    }

    // Reduce the gap for the next iteration
    gap = Math.floor(gap / 2);
  }

  return arr;
}
let arr = [9, 5, 1, 3, 8, 4, 2, 7, 6];
console.log("Original array:", arr);

let sortedArr = shellSort(arr);
console.log("Sorted array:", sortedArr);
