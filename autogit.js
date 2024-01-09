function shellSort(arr) {
  // Step 2: Generate a sequence of increment values
  let gaps = [701, 301, 132, 57, 23, 10, 4, 1];

  // Step 3: Start with the largest gap and reduce it in each iteration
  for (let gap of gaps) {
    // Step 4: Perform insertion sort on each gap
    for (let i = gap; i < arr.length; i++) {
      let temp = arr[i];
      let j = i;

      // Step 5: Insert the element into the correct position
      while (j >= gap && arr[j - gap] > temp) {
        arr[j] = arr[j - gap];
        j -= gap;
      }
      arr[j] = temp;
    }
  }

  // Step 6: Return the sorted array
  return arr;
}
let arr = [7, 2, 6, 9, 3, 1];
let sortedArr = shellSort(arr);
console.log(sortedArr); // Output: [1, 2, 3, 6, 7, 9]
