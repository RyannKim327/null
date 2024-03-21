function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  const sortedArrays = arr.map(item => [item]); // Convert each item in the array to an array of one element

  while (sortedArrays.length > 1) {
    const mergedArray = [];
    for (let i = 0; i < sortedArrays.length; i += 2) {
      if (i + 1 < sortedArrays.length) {
        mergedArray.push(merge(sortedArrays[i], sortedArrays[i + 1]));
      } else {
        mergedArray.push(sortedArrays[i]);
      }
    }
    sortedArrays.length = 0;
    sortedArrays.push(...mergedArray);
  }

  return sortedArrays[0];
}

function merge(arr1, arr2) {
  let merged = [];
  while (arr1.length && arr2.length) {
    if (arr1[0] < arr2[0]) {
      merged.push(arr1.shift());
    } else {
      merged.push(arr2.shift());
    }
  }

  return [...merged, ...arr1, ...arr2];
}

// Test the mergeSort function
const arr = [38, 27, 43, 3, 9, 82, 10];
console.log(mergeSort(arr)); // Output: [3, 9, 10, 27, 38, 43, 82]
