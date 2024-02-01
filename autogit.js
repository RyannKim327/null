function shellSort(array) {
  const len = array.length;
  let gap = Math.floor(len / 2);
  
  while (gap > 0) {
    for (let i = gap; i < len; i++) {
      const temp = array[i];
      let j = i;
      
      while (j >= gap && array[j - gap] > temp) {
        array[j] = array[j - gap];
        j -= gap;
      }
      
      array[j] = temp;
    }
    
    gap = Math.floor(gap / 2);
  }
  
  return array;
}
const arr = [12, 34, 54, 2, 3];
console.log(shellSort(arr));
