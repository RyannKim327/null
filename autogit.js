function shellSort(arr) {
  let gap = Math.floor(arr.length / 2);
  
  while (gap > 0) {
    for (let i = gap; i < arr.length; i++) {
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
const array = [6, 2, 9, 1, 5, 3, 10];
console.log(shellSort(array)); // Output: [1, 2, 3, 5, 6, 9, 10]
