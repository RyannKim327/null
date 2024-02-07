function mergeSortIterative(array) {
  const length = array.length;
  const tempArray = new Array(length);
  
  for (let blockSize = 1; blockSize < length; blockSize *= 2) {
    for (let start = 0; start < length - blockSize; start += 2 * blockSize) {
      const mid = start + blockSize - 1;
      const end = Math.min(start + 2 * blockSize - 1, length - 1);
      merge(array, tempArray, start, mid, end);
    }
  }
  
  return array;
}

function merge(array, tempArray, start, mid, end) {
  let i = start;
  let j = mid + 1;
  
  for (let k = start; k <= end; k++) {
    tempArray[k] = array[k];
  }
  
  for (let k = start; k <= end; k++) {
    if (i > mid) {
      array[k] = tempArray[j];
      j++;
    } else if (j > end) {
      array[k] = tempArray[i];
      i++;
    } else if (tempArray[j] < tempArray[i]) {
      array[k] = tempArray[j];
      j++;
    } else {
      array[k] = tempArray[i];
      i++;
    }
  }
}
const array = [5, 9, 2, 8, 3, 7, 1, 6, 4];
console.log("Original Array:", array);

const sortedArray = mergeSortIterative(array);
console.log("Sorted Array:", sortedArray);
