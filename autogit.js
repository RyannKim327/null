function interpolationSearch(array, target, start = 0) {
  const end = array.length - 1;

  const pos = Math.floor(
    start + ((target - array[start]) * (end - start)) / (array[end] - array[start])
  );
  if (pos < start || pos > end || array[pos] !== target) {
    return -1;
  } else if (array[pos] === target) {
    return pos;
  }
  if (array[pos] > target) {
    return interpolationSearch(array, target, start, pos - 1);
  } else {
    return interpolationSearch(array, target, pos + 1, end);
  }
}
const arr = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
const target = 13;

console.log(interpolationSearch(arr, target)); // Output: 6
