function mergeSort(array) {
  const length = array.length;
  const tempArray = Array.from(array);
  
  for (let width = 1; width < length; width *= 2) {
    for (let i = 0; i < length; i += 2 * width) {
      merge(array, tempArray, i, Math.min(i + width, length), Math.min(i + 2 * width, length));
    }
    
    // Swap the arrays
    [array, tempArray] = [tempArray, array];
  }
  
  return array;
}

function merge(array, tempArray, left, mid, right) {
  let i = left;
  let j = mid;
  
  for (let k = left; k < right; k++) {
    if (i < mid && (j >= right || array[i] <= array[j])) {
      tempArray[k] = array[i];
      i++;
    } else {
      tempArray[k] = array[j];
      j++;
    }
  }
}
const array = [4, 3, 2, 1, 5];
const sortedArray = mergeSort(array);
console.log(sortedArray);
