function countingSort(arr, max) {
  const count = new Array(max + 1).fill(0);
  const output = new Array(arr.length);
  
  for (let i = 0; i < arr.length; i++) {
    count[arr[i]]++;
  }

  for (let i = 1; i <= max; i++) {
    count[i] += count[i - 1];
  }

  for (let i = arr.length - 1; i >= 0; i--) {
    output[count[arr[i]] - 1] = arr[i];
    count[arr[i]]--;
  }

  for (let i = 0; i < arr.length; i++) {
    arr[i] = output[i];
  }

  return arr;
}

// Example usage
const arr = [4, 2, 2, 8, 3, 3, 1];
const max = Math.max(...arr); // Find the maximum element in the array
const sortedArr = countingSort(arr, max);
console.log(sortedArr); // Output: [1, 2, 2, 3, 3, 4, 8]
