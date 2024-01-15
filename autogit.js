function findKthSmallest(arr, k) {
  if (k < 1 || k > arr.length) {
    return null;
  }

  function swap(a, b) {
    const temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
  }

  function partition(left, right, pivotIndex) {
    const pivotValue = arr[pivotIndex];
    let partitionIndex = left;

    swap(pivotIndex, right);

    for (let i = left; i < right; i++) {
      if (arr[i] < pivotValue) {
        swap(i, partitionIndex);
        partitionIndex++;
      }
    }

    swap(partitionIndex, right);
    return partitionIndex;
  }

  function quickSelect(left, right, k) {
    if (left === right) {
      return arr[left];
    }

    const pivotIndex = Math.floor(Math.random() * (right - left + 1)) + left;
    const partitionIndex = partition(left, right, pivotIndex);

    if (k === partitionIndex) {
      return arr[k];
    } else if (k < partitionIndex) {
      return quickSelect(left, partitionIndex - 1, k);
    } else {
      return quickSelect(partitionIndex + 1, right, k);
    }
  }

  return quickSelect(0, arr.length - 1, k - 1);
}

// Example usage:
const arr = [7, 2, 10, 1, 5];
const k = 3;

const kthSmallest = findKthSmallest(arr, k);
console.log(`The ${k}th smallest element is ${kthSmallest}`);
