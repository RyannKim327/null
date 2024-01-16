function countingSort(arr) {
  // Find the maximum element in the array
  let max = Math.max(...arr);

  // Create a count array of size max+1 and initialize it with 0
  let count = new Array(max + 1).fill(0);

  // Store the count of each element in the input array
  arr.forEach((num) => {
    count[num]++;
  });

  // Modify the count array to store the actual position of each element in the sorted array
  for (let i = 1; i <= max; i++) {
    count[i] += count[i - 1];
  }

  // Create a temporary output array
  let output = new Array(arr.length);

  // Build the output array
  for (let i = arr.length - 1; i >= 0; i--) {
    output[count[arr[i]] - 1] = arr[i];
    count[arr[i]]--;
  }

  // Copy the sorted elements from the output array to the input array
  for (let i = 0; i < arr.length; i++) {
    arr[i] = output[i];
  }

  return arr;
}

// Example usage:
let arr = [4, 2, 9, 6, 2, 1, 5, 8, 7];
let sortedArr = countingSort(arr);
console.log(sortedArr);
