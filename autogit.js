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

  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }
  
  // Concatenate any remaining elements
  while (left.length) {
    result.push(left.shift());
  }
  
  while (right.length) {
    result.push(right.shift());
  }
  
  return result;
}
const arr = [5, 2, 9, 1, 7, 6];
const sortedArr = mergeSort(arr);
console.log(sortedArr);  // [1, 2, 5, 6, 7, 9]
