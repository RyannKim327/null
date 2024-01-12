function findKthSmallest(arr, k) {
  if (k < 1 || k > arr.length) {
    return "Invalid input";
  }

  function swap(arr, a, b) {
    const temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
  }

  function partition(arr, low, high) {
    const pivot = arr[high];
    let i = low;

    for (let j = low; j < high; j++) {
      if (arr[j] < pivot) {
        swap(arr, i, j);
        i++;
      }
    }

    swap(arr, i, high);
    return i;
  }

  function quickSelect(arr, low, high, k) {
    if (low === high) {
      return arr[low];
    }

    const pivotIndex = partition(arr, low, high);

    if (k === pivotIndex) {
      return arr[k];
    } else if (k < pivotIndex) {
      return quickSelect(arr, low, pivotIndex - 1, k);
    } else {
      return quickSelect(arr, pivotIndex + 1, high, k);
    }
  }

  return quickSelect(arr, 0, arr.length - 1, k - 1);
}
const array = [7, 10, 4, 3, 20, 15];
const k = 3;

const kthSmallest = findKthSmallest(array, k);
console.log(kthSmallest); // Output: 7
