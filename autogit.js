function mergeSortIterative(arr) {
  if (arr.length < 2) {
    return arr;
  }
  
  const len = arr.length;
  let step = 1;
  
  while (step < len) {
    let left = 0;
    
    while (left + step < len) {
      mergeArrays(arr, left, step);
      left += step * 2;
    }
    
    step *= 2;
  }
  
  return arr;
}

function mergeArrays(arr, start, step) {
  const mid = start + step;
  const end = Math.min(start + 2 * step, arr.length);
  const temp = [];
  
  let i = start;
  let j = mid;
  
  while (i < mid && j < end) {
    if (arr[i] < arr[j]) {
      temp.push(arr[i]);
      i++;
    } else {
      temp.push(arr[j]);
      j++;
    }
  }
  
  while (i < mid) {
    temp.push(arr[i]);
    i++;
  }
  
  while (j < end) {
    temp.push(arr[j]);
    j++;
  }
  
  for (let k = start; k < end; k++) {
    arr[k] = temp[k - start];
  }
}

// Example
const arr = [5, 3, 8, 6, 2, 7, 1, 4];
console.log(mergeSortIterative(arr)); // Output: [1, 2, 3, 4, 5, 6, 7, 8]
