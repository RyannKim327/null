function interpolationSearch(arr, target, start = 0) {
  let end = arr.length - 1;

  while (start <= end && target >= arr[start] && target <= arr[end]) {
    let pos = start + Math.floor(((target - arr[start]) / (arr[end] - arr[start])) * (end - start));
    
    if (arr[pos] === target)
      return pos;

    if (arr[pos] < target)
      start = pos + 1;
    else
      end = pos - 1;
  }
  
  return -1;
}
const arr = [1, 3, 5, 7, 9, 11];
console.log(interpolationSearch(arr, 7)); // Output: 3 (index of 7 in the array)
console.log(interpolationSearch(arr, 4)); // Output: -1 (4 is not present in the array)
