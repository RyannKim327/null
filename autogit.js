function findKthSmallest(array, k) {
  if (k < 1 || k > array.length) {
    return null; // Invalid input
  }

  return quickSelect(array, 0, array.length - 1, k - 1);
}

function quickSelect(array, start, end, k) {
  if (start === end) {
    return array[start];
  }

  const pivotIndex = partition(array, start, end);

  if (k === pivotIndex) {
    return array[k];
  } else if (k < pivotIndex) {
    return quickSelect(array, start, pivotIndex - 1, k);
  } else {
    return quickSelect(array, pivotIndex + 1, end, k);
  }
}

function partition(array, start, end) {
  const pivotValue = array[end];
  let pivotIndex = start;

  for (let i = start; i < end; i++) {
    if (array[i] < pivotValue) {
      swap(array, i, pivotIndex);
      pivotIndex++;
    }
  }

  swap(array, pivotIndex, end);
  return pivotIndex;
}

function swap(array, i, j) {
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}
const array = [7, 10, 4, 3, 20, 15];
const k = 3;

const kthSmallest = findKthSmallest(array, k);
console.log(`The ${k}th smallest element is ${kthSmallest}`);
