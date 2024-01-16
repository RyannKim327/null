function findKthSmallest(arr, k) {
  if (arr.length === 0 || k < 1 || k > arr.length) {
    return null;
  }

  // Shuffle the array to ensure average-case linear time complexity
  shuffle(arr);

  // Perform quickselect to find the kth smallest element
  return quickselect(arr, 0, arr.length - 1, k - 1);
}

function quickselect(arr, start, end, k) {
  if (start === end) {
    return arr[start];
  }

  // Partition the array around a pivot
  const pivotIndex = partition(arr, start, end);

  // Check the pivot's position relative to k
  if (pivotIndex === k) {
    return arr[pivotIndex];
  } else if (pivotIndex < k) {
    return quickselect(arr, pivotIndex + 1, end, k);
  } else {
    return quickselect(arr, start, pivotIndex - 1, k);
  }
}

function partition(arr, start, end) {
  const pivotValue = arr[end];
  let pivotIndex = start;

  for (let i = start; i < end; i++) {
    if (arr[i] <= pivotValue) {
      swap(arr, i, pivotIndex);
      pivotIndex++;
    }
  }

  swap(arr, pivotIndex, end);
  return pivotIndex;
}

function swap(arr, i, j) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    swap(arr, i, j);
  }
}
