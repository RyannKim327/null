function mergeSort(arr) {
  const arrLen = arr.length;
  let tempArray = [];

  for (let i = 0; i < arrLen; i++) {
    tempArray.push([arr[i]]);
  }

  let merged = [];
  while (arrLen > 1) {
    arrLen = Math.ceil(arrLen / 2);
    for (let i = 0; i < arrLen; i++) {
      const left = tempArray[2 * i];
      const right = tempArray[2 * i + 1];
      const mergedArr = merge(left, right);
      merged.push(mergedArr);
    }
    tempArray = merged;
    merged = [];
  }

  return tempArray[0];
}

function merge(left, right) {
  const merged = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      merged.push(left[leftIndex]);
      leftIndex++;
    } else {
      merged.push(right[rightIndex]);
      rightIndex++;
    }
  }

  return merged.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

// Example usage:
const arr = [4, 2, 8, 5, 1, 9, 6, 3, 7];
const sortedArray = mergeSort(arr);
console.log(sortedArray); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]
