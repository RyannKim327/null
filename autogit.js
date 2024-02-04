function shellSort(arr) {
  // Calculate the gap sequence
  let gap = Math.floor(arr.length / 2);
  
  // Loop over the gap values
  while (gap > 0) {
    // Perform insertion sort on each sublist
    for (let i = gap; i < arr.length; i++) {
      let j = i;
      let temp = arr[i];
      
      while (j >= gap && arr[j - gap] > temp) {
        arr[j] = arr[j - gap];
        j -= gap;
      }
      
      arr[j] = temp;
    }
    
    // Reduce the gap value
    gap = Math.floor(gap / 2);
  }
  
  return arr;
}
let arr = [9, 2, 5, 1, 4, 6, 8, 3, 7];
console.log(shellSort(arr));  // [1, 2, 3, 4, 5, 6, 7, 8, 9]
