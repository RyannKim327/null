function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const midIndex = Math.floor(arr.length / 2);
  const leftHalf = arr.slice(0, midIndex);
  const rightHalf = arr.slice(midIndex);

  return merge(mergeSort(leftHalf), mergeSort(rightHalf));
}

function merge(arr1, arr2) {
  const merged = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] <= arr2[j]) {
      merged.push(arr1[i]);
      i++;
    } else {
      merged.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    merged.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    merged.push(arr2[j]);
    j++;
  }

  return merged;
}

// Example usage:
const arr = [5, 2, 8, 12, 3, 1, 9];
const sortedArr = mergeSort(arr);
console.log(sortedArr);
