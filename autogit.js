function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  
  const middle = Math.floor(arr.length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);
  
  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  let result = [];
  let i = 0;
  let j = 0;
  
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i++]);
    } else {
      result.push(right[j++]);
    }
  }
  
  while (i < left.length) {
    result.push(left[i++]);
  }
  
  while (j < right.length) {
    result.push(right[j++]);
  }
  
  return result;
}

// Example usage
const arr = [8, 4, 2, 9, 3, 1, 5, 7, 6];
const sortedArr = mergeSort(arr);
console.log(sortedArr); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
