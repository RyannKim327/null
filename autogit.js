function swap(arr, a, b) {
    const temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}

function partition(arr, left, right) {
    const pivotValue = arr[right];
    let partitionIndex = left;

    for (let i = left; i < right; i++) {
        if (arr[i] < pivotValue) {
            swap(arr, i, partitionIndex);
            partitionIndex++;
        }
    }
    swap(arr, partitionIndex, right);
    return partitionIndex;
}

function quickSelect(arr, k, left = 0, right = arr.length - 1) {
    if (left === right) {
        return arr[left];
    }

    const pivotIndex = partition(arr, left, right);

    if (k === pivotIndex) {
        return arr[k];
    } else if (k < pivotIndex) {
        return quickSelect(arr, k, left, pivotIndex - 1);
    } else {
        return quickSelect(arr, k, pivotIndex + 1, right);
    }
}

// Example usage
const array = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
const k = 5; // find the 5th smallest element
const kthSmallest = quickSelect(array, k - 1); // k-1 because arrays are zero-based
console.log(`The ${k}th smallest element is: ${kthSmallest}`);
