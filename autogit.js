function shellSort(arr) {
  // Start with a big gap, then reduce the gap
  for (let gap = Math.floor(arr.length / 2); gap > 0; gap = Math.floor(gap / 2)) {
    // Perform insertion sort on each sublist defined by gap
    for (let i = gap; i < arr.length; i++) {
      let temp = arr[i];
      let j;
      
      for (j = i; j >= gap && arr[j - gap] > temp; j -= gap) {
        arr[j] = arr[j - gap];
      }
      
      arr[j] = temp;
    }
  }
  
  return arr;
}
const numbers = [5, 1, 4, 2, 8];

console.log("Before sorting:", numbers);
console.log("After sorting:", shellSort(numbers));
Before sorting: [5, 1, 4, 2, 8]
After sorting: [1, 2, 4, 5, 8]
