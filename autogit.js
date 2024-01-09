function getKthSmallestElement(arr, k) {
  arr.sort((a, b) => a - b);
  return arr[k - 1];
}
function quickselect(arr, left, right, k) {
  if (left === right) {
    return arr[left];
  }

  const pivotIndex = partition(arr, left, right);
  
  if (pivotIndex === k - 1) {
    return arr[pivotIndex];
  } else if (pivotIndex < k - 1) {
    return quickselect(arr, pivotIndex + 1, right, k);
  } else {
    return quickselect(arr, left, pivotIndex - 1, k);
  }
}

function partition(arr, left, right) {
  const pivot = arr[Math.floor((left + right) / 2)];
  let i = left;
  let j = right;

  while (i <= j) {
    while (arr[i] < pivot) {
      i++;
    }

    while (arr[j] > pivot) {
      j--;
    }

    if (i <= j) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
      i++;
      j--;
    }
  }

  return i;
}

function getKthSmallestElement(arr, k) {
  return quickselect(arr, 0, arr.length - 1, k);
}
