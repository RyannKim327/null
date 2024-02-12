function shellSort(arr) {
  let len = arr.length;
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
let array = [4, 3, 7, 1, 9, 2, 6];
console.log(shellSort(array)); // Output: [1, 2, 3, 4, 6, 7, 9]
