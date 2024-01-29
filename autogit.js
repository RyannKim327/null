function mergeSortIterative(array) {
  const n = array.length;
  const aux = new Array(n); // Auxiliary array for merging

  // Start with subarrays of size 1, then merge and double the subarray size
  for (let subArraySize = 1; subArraySize < n; subArraySize *= 2) {
    for (let startIndex = 0; startIndex < n - subArraySize; startIndex += 2 * subArraySize) {
      const middleIndex = startIndex + subArraySize - 1;
      const endIndex = Math.min(startIndex + 2 * subArraySize - 1, n - 1);

      merge(array, aux, startIndex, middleIndex, endIndex);
    }
  }

  return array;
}

function merge(array, aux, startIndex, middleIndex, endIndex) {
  let i = startIndex;
  let j = middleIndex + 1;

  // Copy array[startIndex..endIndex] to aux[startIndex..endIndex]
  for (let k = startIndex; k <= endIndex; k++) {
    aux[k] = array[k];
  }

  // Merge back to array[startIndex..endIndex]
  for (let k = startIndex; k <= endIndex; k++) {
    if (i > middleIndex) {
      // Left subarray is exhausted
      array[k] = aux[j++];
    } else if (j > endIndex) {
      // Right subarray is exhausted
      array[k] = aux[i++];
    } else if (aux[j] < aux[i]) {
      // Right element is smaller than left element
      array[k] = aux[j++];
    } else {
      // Left element is smaller than or equal to right element
      array[k] = aux[i++];
    }
  }
}

// Example usage:
const array = [5, 3, 8, 4, 2, 1, 6, 9, 7];
const sortedArray = mergeSortIterative(array);
console.log(sortedArray);
