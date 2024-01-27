function shellSort(arr) {
  const len = arr.length;
  let gap = Math.floor(len / 2);
  
  while (gap > 0) {
    for (let i = gap; i < len; i++) {
      let temp = arr[i];
      let j = i;
      
      while (j >= gap && arr[j - gap] > temp) {
        arr[j] = arr[j - gap];
        j -= gap;
      }
      
      arr[j] = temp;
    }
    
    gap = Math.floor(gap / 2);
  }
  
  return arr;
}

// Example usage:
const array = [9, 5, 1, 8, 3, 7, 4, 6, 2];
console.log(shellSort(array)); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]
