function countingSort(arr) {
  const n = arr.length;
  if (n < 2) return arr;

  // Find min and max values in the array
  let min = arr[0],
    max = arr[0];
  for (let i = 1; i < n; i++) {
    if (arr[i] < min) min = arr[i];
    if (arr[i] > max) max = arr[i];
  }
  
  // Create a count array with the size of range + 1
  const range = max - min + 1;
  const count = Array(range).fill(0);

  // Increment the count of each element in the count array
  for (let i = 0; i < n; i++) {
    count[arr[i] - min]++;
  }

  // Modify the count array to store the actual position of each element
  for (let i = 1; i < range; i++) {
    count[i] += count[i - 1];
  }

  // Create a result array
  const output = Array(n);

  // Traverse through the input array and place elements in the output array
  for (let i = n - 1; i >= 0; i--) {
    output[count[arr[i] - min] - 1] = arr[i];
    count[arr[i] - min]--;
  }

  return output;
}

// Example usage:
const arr = [4, 2, 2, 8, 3, 3, 1];
const sortedArr = countingSort(arr);
console.log(sortedArr);
[1, 2, 2, 3, 3, 4, 8]
