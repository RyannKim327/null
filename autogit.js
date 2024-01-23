// Function to merge two sorted arrays
function merge(leftArr, rightArr) {
  let sortedArr = [];
  let leftIndex = 0;
  let rightIndex = 0;

  // Compare the elements of the two arrays and add the smaller one to the sorted array
  while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
    if (leftArr[leftIndex] < rightArr[rightIndex]) {
      sortedArr.push(leftArr[leftIndex]);
      leftIndex++;
    } else {
      sortedArr.push(rightArr[rightIndex]);
      rightIndex++;
    }
  }
  
  // Add remaining elements from left array (if any)
  while (leftIndex < leftArr.length) {
    sortedArr.push(leftArr[leftIndex]);
    leftIndex++;
  }

  // Add remaining elements from right array (if any)
  while (rightIndex < rightArr.length) {
    sortedArr.push(rightArr[rightIndex]);
    rightIndex++;
  }

  return sortedArr;
}

// Function to perform iterative merge sort
function mergeSortIterative(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  // Create an array of subarrays, each containing a single element
  let subarrays = arr.map(val => [val]);

  // Merge subarrays until there is only one sorted array left
  while(subarrays.length > 1) {
    let mergedSubarrays = [];
    
    for (let i = 0; i < subarrays.length; i += 2) {
      // Merge adjacent subarrays
      if (i + 1 < subarrays.length) {
        mergedSubarrays.push(merge(subarrays[i], subarrays[i + 1]));
      } else {
        mergedSubarrays.push(subarrays[i]); // If there's only one subarray left, add it as it is
      }
    }
    
    subarrays = mergedSubarrays;
  }

  return subarrays[0];
}

// Testing the algorithm
const arr = [5, 2, 8, 4, 1, 9, 3, 6, 7];
const sortedArr = mergeSortIterative(arr);
console.log(sortedArr); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]
