function mergeSort(array) {
  if (array.length <= 1) {
    return array;
  }
  
  const middle = Math.floor(array.length / 2);
  const left = array.slice(0, middle);
  const right = array.slice(middle);
  
  return merge(mergeSort(left), mergeSort(right));
}

function merge(arr1, arr2) {
  let i = 0;
  let j = 0;
  let merged = [];
  
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
const array = [5, 8, 2, 1, 6, 3, 7, 4];
const sortedArray = mergeSort(array);
console.log(sortedArray);
