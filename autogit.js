function shellSort(arr) {
  var len = arr.length,
      gap = Math.floor(len / 2); // Set the initial gap value

  while (gap > 0) {
    for (var i = gap; i < len; i++) {
      var temp = arr[i];
      var j = i;

      // Shift the elements of the subarray
      while (j >= gap && arr[j - gap] > temp) {
        arr[j] = arr[j - gap];
        j -= gap;
      }

      arr[j] = temp;
    }
    
    gap = Math.floor(gap / 2); // Reduce the gap for next iteration
  }
  
  return arr;
}
var arr = [9, 5, 1, 3, 8, 4, 7, 2, 6];
console.log("Original Array:", arr);

arr = shellSort(arr);
console.log("Sorted Array:", arr);
Original Array: [9, 5, 1, 3, 8, 4, 7, 2, 6]
Sorted Array: [1, 2, 3, 4, 5, 6, 7, 8, 9]
