function countingSort(array) {
  // ...
}
  let max = Math.max(...array);
  let count = new Array(max + 1).fill(0);
  for (let i = 0; i < array.length; i++) {
    count[array[i]]++;
  }
  for (let i = 1; i < count.length; i++) {
    count[i] += count[i - 1];
  }
  let result = new Array(array.length);
  for (let i = array.length - 1; i >= 0; i--) {
    result[count[array[i]] - 1] = array[i];
    count[array[i]]--;
  }
  return result;
function countingSort(array) {
  let max = Math.max(...array);
  let count = new Array(max + 1).fill(0);

  for (let i = 0; i < array.length; i++) {
    count[array[i]]++;
  }

  for (let i = 1; i < count.length; i++) {
    count[i] += count[i - 1];
  }

  let result = new Array(array.length);

  for (let i = array.length - 1; i >= 0; i--) {
    result[count[array[i]] - 1] = array[i];
    count[array[i]]--;
  }

  return result;
}

// Example usage:
let array = [4, 2, 2, 8, 3, 3, 1];
let sortedArray = countingSort(array);
console.log(sortedArray); // [1, 2, 2, 3, 3, 4, 8]
