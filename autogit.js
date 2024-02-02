function interpolationSearch(arr, target, start, end) {
  if (start > end || target < arr[start] || target > arr[end]) {
    return -1; // Target is not found
  }

  const pos = start + Math.floor(((target - arr[start]) / (arr[end] - arr[start])) * (end - start));

  if (arr[pos] === target) {
    return pos; // Target is found
  } else if (arr[pos] < target) {
    return interpolationSearch(arr, target, pos + 1, end); // Recurse on the right side
  } else {
    return interpolationSearch(arr, target, start, pos - 1); // Recurse on the left side
  }
}
const sortedArray = [1, 3, 5, 7, 9, 11, 13, 15];
const targetElement = 9;
const index = interpolationSearch(sortedArray, targetElement, 0, sortedArray.length - 1);
console.log(index); // Output: 4 (index of 9 in the array)
