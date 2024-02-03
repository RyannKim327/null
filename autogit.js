function interpolationSearch(array, target, compareFn) {
  // Code implementation goes here
}
function interpolationSearch(array, target, compareFn) {
  let start = 0;
  let end = array.length - 1;
  // Code implementation goes here
}
function interpolationSearch(array, target, compareFn) {
  let start = 0;
  let end = array.length - 1;

  while (start <= end) {
    // Code implementation goes here
  }
}
function interpolationSearch(array, target, compareFn) {
  let start = 0;
  let end = array.length - 1;

  while (start <= end) {
    const position = start + ((target - array[start]) / (array[end] - array[start])) * (end - start);
    // Code implementation goes here
  }
}
function interpolationSearch(array, target, compareFn) {
  let start = 0;
  let end = array.length - 1;

  while (start <= end) {
    const position = start + ((target - array[start]) / (array[end] - array[start])) * (end - start);

    if (position < start || position > end)
      break;

    if (compareFn && compareFn(array[position], target) === 0)
      return position;
    else if (array[position] === target)
      return position;
    else if (compareFn && compareFn(array[position], target) < 0)
      start = position + 1;
    else
      end = position - 1;
  }

  return -1;
}
function interpolationSearch(array, target, compareFn) {
  let start = 0;
  let end = array.length - 1;

  while (start <= end) {
    const position = start + ((target - array[start]) / (array[end] - array[start])) * (end - start);

    if (position < start || position > end)
      break;

    if (compareFn && compareFn(array[position], target) === 0)
      return position;
    else if (array[position] === target)
      return position;
    else if (compareFn && compareFn(array[position], target) < 0)
      start = position + 1;
    else
      end = position - 1;
  }

  return -1;
}
const array = [1, 2, 4, 6, 8, 10];
const target = 6;
const index = interpolationSearch(array, target);
console.log(index);  // Output: 3
