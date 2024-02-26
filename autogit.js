function findKthSmallestElement(arr, k) {
    arr.sort((a, b) => a - b);
    return arr[k - 1];
}

// Example usage
const arr = [3, 1, 4, 1, 5, 9, 2, 6, 5];
const k = 4;
const kthSmallest = findKthSmallestElement(arr, k);
console.log(`The ${k}th smallest element is: ${kthSmallest}`);
function partition(arr, left, right) {
    const pivot = arr[right];
    let i = left - 1;
    for (let j = left; j < right; j++) {
        if (arr[j] < pivot) {
            i++;
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }
    [arr[i + 1], arr[right]] = [arr[right], arr[i + 1]];
    return i + 1;
}

function quickSelect(arr, left, right, k) {
    if (left === right) return arr[left];
  
    const pivotIndex = partition(arr, left, right);
  
    if (k === pivotIndex) {
        return arr[k];
    } else if (k < pivotIndex) {
        return quickSelect(arr, left, pivotIndex - 1, k);
    } else {
        return quickSelect(arr, pivotIndex + 1, right, k);
    }
}

function findKthSmallestElement(arr, k) {
    return quickSelect(arr, 0, arr.length - 1, k - 1);
}

// Example usage
const arr = [3, 1, 4, 1, 5, 9, 2, 6, 5];
const k = 4;
const kthSmallest = findKthSmallestElement(arr, k);
console.log(`The ${k}th smallest element is: ${kthSmallest}`);
