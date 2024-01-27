function interpolationSearch(array, target, compareFn = (a, b) => a - b) {
  let low = 0;
  let high = array.length - 1;
  
  while (low <= high && target >= array[low] && target <= array[high]) {
    // Calculate the position using interpolation formula
    let position = Math.floor(low + ((target - array[low]) * (high - low)) / (array[high] - array[low]));

    // If the target value is found
    if (compareFn(array[position], target) === 0) {
      return position;
    }

    if (compareFn(array[position], target) < 0) {
      low = position + 1;
    } else {
      high = position - 1;
    }
  }

  return -1; // Target value not found
}
const arr = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
const target = 11;
const result = interpolationSearch(arr, target);

if (result !== -1) {
  console.log(`Element found at index ${result}`);
} else {
  console.log("Element not found");
}
