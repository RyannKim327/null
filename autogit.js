function shellSort(arr) {
  // TODO: Implementation
}
function calculateGapSequence(arrLength) {
  const sequence = [];
  let gap = 1;
  while (gap < arrLength) {
    sequence.push(gap);
    gap = 3 * gap + 1;
  }
  return sequence.reverse();
}
function shellSort(arr) {
  const sequence = calculateGapSequence(arr.length);
  
  for (let gap of sequence) {
    for (let i = gap; i < arr.length; i++) {
      const temp = arr[i];
      let j = i;
      
      while (j >= gap && arr[j - gap] > temp) {
        arr[j] = arr[j - gap];
        j -= gap;
      }
      
      arr[j] = temp;
    }
  }
  
  return arr;
}
const array = [8, 4, 1, 5, 2];
console.log(shellSort(array)); // Output: [1, 2, 4, 5, 8]
