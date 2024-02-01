function shellSort(arr) {
  const n = arr.length;
  
  // Start with a big gap, then reduce the gap
  for (let gap = Math.floor(n / 2); gap > 0; gap = Math.floor(gap / 2)) {
    
    // Perform insertion sort on each subset defined by the gap
    for (let i = gap; i < n; i++) {
      const temp = arr[i];
      
      // Shift elements until the correct position for arr[i] is found
      let j;
      for (j = i; j >= gap && arr[j - gap] > temp; j -= gap) {
        arr[j] = arr[j - gap];
      }
      
      // Place the current element at its correct position
      arr[j] = temp;
    }
  }
  
  return arr;
}
const arr = [6, 1, 3, 8, 2, 9, 4, 7, 5];
const sortedArr = shellSort(arr);
console.log(sortedArr);
[1, 2, 3, 4, 5, 6, 7, 8, 9]
