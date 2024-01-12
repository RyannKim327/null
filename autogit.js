function countingSort(arr) {
  let max = Math.max(...arr);
  let count = new Array(max + 1).fill(0);

  // Count the occurrences of each element
  for (let num of arr) {
    count[num]++;
  }

  // Modify the count array
  for (let i = 1; i < count.length; i++) {
    count[i] += count[i - 1];
  }

  let output = new Array(arr.length);

  // Place the elements in the output array
  for (let i = arr.length - 1; i >= 0; i--) {
    output[count[arr[i]] - 1] = arr[i];
    count[arr[i]]--;
  }

  return output;
}

// Example usage
let arr = [6, 2, 9, 3, 5, 1];
let sortedArr = countingSort(arr);
console.log(sortedArr); // Output: [1, 2, 3, 5, 6, 9]
