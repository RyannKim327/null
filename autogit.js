function countingSort(arr) {
  // Find the maximum element in the array
  let max = Math.max(...arr);

  // Create a count array of length 'max+1' with all elements initialized to 0
  let count = new Array(max + 1).fill(0);

  // Store the count of each element in the input array
  for (let i = 0; i < arr.length; i++) {
    count[arr[i]]++;
  }

  // Modify the count array such that each element stores the sum of previous counts
  for (let i = 1; i <= max; i++) {
    count[i] += count[i - 1];
  }

  // Create a sorted array and fill it with the elements from the input array
  let sortedArr = new Array(arr.length);
  for (let i = 0; i < arr.length; i++) {
    sortedArr[count[arr[i]] - 1] = arr[i];
    count[arr[i]]--;
  }

  return sortedArr;
}

// Example usage:
let arr = [4, 2, 2, 8, 3, 3, 1];
let sortedArr = countingSort(arr);
console.log(sortedArr);
