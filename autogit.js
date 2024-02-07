function mergeSortIterative(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  // Create subarrays of size 1
  let subarrays = arr.map((element) => [element]);

  // Merge pairs of subarrays until there is only one sorted array
  while (subarrays.length > 1) {
    let mergedSubarrays = [];

    for (let i = 0; i < subarrays.length; i += 2) {
      if (i + 1 < subarrays.length) {
        // Merge two subarrays
        let merged = merge(subarrays[i], subarrays[i + 1]);
        mergedSubarrays.push(merged);
      } else {
        // If there is an odd number of subarrays, pass it through
        mergedSubarrays.push(subarrays[i]);
      }
    }

    subarrays = mergedSubarrays;
  }

  return subarrays[0];
}

function merge(leftArr, rightArr) {
  let mergedArr = [];
  let leftIndex = 0;
  let rightIndex = 0;

  // Merge elements from the two subarrays in sorted order
  while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
    if (leftArr[leftIndex] < rightArr[rightIndex]) {
      mergedArr.push(leftArr[leftIndex]);
      leftIndex++;
    } else {
      mergedArr.push(rightArr[rightIndex]);
      rightIndex++;
    }
  }

  // Copy the remaining elements from the left subarray
  while (leftIndex < leftArr.length) {
    mergedArr.push(leftArr[leftIndex]);
    leftIndex++;
  }

  // Copy the remaining elements from the right subarray
  while (rightIndex < rightArr.length) {
    mergedArr.push(rightArr[rightIndex]);
    rightIndex++;
  }

  return mergedArr;
}
let arr = [5, 2, 9, 1, 7, 6, 3];
let sortedArr = mergeSortIterative(arr);
console.log(sortedArr); // [1, 2, 3, 5, 6, 7, 9]
