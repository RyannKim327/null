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
    if (left[0] < right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }
  
  // Concatenate remaining elements from both arrays
  return [...result, ...left, ...right];
}

// Example usage:
const array = [4, 8, 2, 1, 5, 7, 6, 3];
const sortedArray = mergeSort(array);
console.log(sortedArray);
