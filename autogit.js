function shellSort(array) {
  const len = array.length;
  let gap = 1;
  
  // Calculate the largest gap
  while (gap < len / 3) {
    gap = gap * 3 + 1;
  }
  
  // Start Shell sort
  while (gap > 0) {
    for (let i = gap; i < len; i++) {
      const temp = array[i];
      let j = i;
      
      // Insertion sort for gap sequences
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
const unsortedArray = [10, -1, 2, 5, 0, 6, 4, -5];
const sortedArray = shellSort(unsortedArray);

console.log(sortedArray); // [-5, -1, 0, 2, 4, 5, 6, 10]
