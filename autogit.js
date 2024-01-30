function interpolationSearch(array, target) {
  let start = 0;
  let end = array.length - 1;

  while (start <= end && target >= array[start] && target <= array[end]) {
    let pos = start + Math.floor(((target - array[start]) / (array[end] - array[start])) * (end - start));
    
    if (array[pos] === target) {
      return pos;
    }
    
    if (array[pos] < target) {
      start = pos + 1;
    } else {
      end = pos - 1;
    }
  }
  
  return -1;
}
const array = [1, 3, 5, 7, 9];
const target = 5;

console.log(interpolationSearch(array, target)); // Output: 2
