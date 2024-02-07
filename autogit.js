position = start + Math.floor((end - start) * (target - array[start]) / (array[end] - array[start]))
function interpolationSearch(target, array, start, end) {
  if (start > end || target < array[start] || target > array[end]) {
    return -1;
  }

  let position = start + Math.floor((end - start) * (target - array[start]) / (array[end] - array[start]));

  if (array[position] === target) {
    return position;
  }

  if (array[position] < target) {
    return interpolationSearch(target, array, position + 1, end);
  }

  if (array[position] > target) {
    return interpolationSearch(target, array, start, position - 1);
  }

  return -1;
}
const array = [1, 3, 5, 7, 9];
const target = 5;
const start = 0;
const end = array.length - 1;

const result = interpolationSearch(target, array, start, end);

if (result === -1) {
  console.log("Target value not found in the array.");
} else {
  console.log(`Target value found at index ${result}.`);
}
Target value found at index 2.
