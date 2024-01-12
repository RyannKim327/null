// Function to merge two sorted arrays
const merge = (arr1, arr2) => {
  const merged = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] <= arr2[j]) {
      merged.push(arr1[i]);
      i++;
    } else {
      merged.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    merged.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    merged.push(arr2[j]);
    j++;
  }

  return merged;
};

// Iterative merge sort function
const mergeSort = (arr) => {
  if (arr.length <= 1) {
    return arr;
  }

  const queue = arr.map((item) => [item]);

  while (queue.length > 1) {
    const merged = merge(queue.shift(), queue.shift());
    queue.push(merged);
  }

  return queue[0];
};

// Example usage:
const arr = [4, 1, 9, 3, 5, 7, 8, 2, 6];
const sortedArr = mergeSort(arr);
console.log(sortedArr); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]
