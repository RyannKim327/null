function kthSmallest(arr: number[], k: number): number {
    // Sort the array
    const sortedArr = arr.sort((a, b) => a - b);
    // Return the k-th smallest element (k-1 due to zero-based indexing)
    return sortedArr[k - 1];
}

// Example usage
const array = [7, 10, 4, 3, 20, 15];
const k = 3;
console.log(kthSmallest(array, k)); // Output: 7
function partition(arr: number[], left: number, right: number, pivotIndex: number): number {
    const pivotValue = arr[pivotIndex];
    // Move the pivot to the end
    [arr[pivotIndex], arr[right]] = [arr[right], arr[pivotIndex]];
    let storeIndex = left;

    // Move all smaller elements to the left
    for (let i = left; i < right; i++) {
        if (arr[i] < pivotValue) {
            [arr[storeIndex], arr[i]] = [arr[i], arr[storeIndex]];
            storeIndex++;
        }
    }

    // Move the pivot to its final place
    [arr[storeIndex], arr[right]] = [arr[right], arr[storeIndex]];
    return storeIndex;
}

function quickSelect(arr: number[], left: number, right: number, k: number): number {
    if (left === right) {
        return arr[left];
    }

    const pivotIndex = Math.floor(Math.random() * (right - left + 1)) + left;
    const newPivotIndex = partition(arr, left, right, pivotIndex);

    if (k === newPivotIndex) {
        return arr[k];
    } else if (k < newPivotIndex) {
        return quickSelect(arr, left, newPivotIndex - 1, k);
    } else {
        return quickSelect(arr, newPivotIndex + 1, right, k);
    }
}

function kthSmallestQuickSelect(arr: number[], k: number): number {
    return quickSelect(arr, 0, arr.length - 1, k - 1);
}

// Example usage
const array2 = [7, 10, 4, 3, 20, 15];
const k2 = 3;
console.log(kthSmallestQuickSelect(array2, k2)); // Output: 7
