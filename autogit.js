function shellSort(arr) {
  const len = arr.length;
  let gap = Math.floor(len / 2);

  while (gap > 0) {
    for (let i = gap; i < len; i++) {
        const temp = arr[i];
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
const array = [8, 3, 1, 5, 2];
console.log(shellSort(array)); // Output: [1, 2, 3, 5, 8]
