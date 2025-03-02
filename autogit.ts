function findKthSmallest(arr: number[], k: number): number {
    if (k < 1 || k > arr.length) {
        throw new Error("k is out of bounds");
    }
    // Sort the array
    arr.sort((a, b) => a - b);
    // Return the k-th smallest element
    return arr[k - 1];
}

// Example usage:
const arr = [3, 2, 1, 5, 6, 4];
const k = 2;
console.log(findKthSmallest(arr, k)); // Output: 2
function partition(arr: number[], left: number, right: number, pivotIndex: number): number {
    const pivotValue = arr[pivotIndex];
    // Move pivot to end
    [arr[pivotIndex], arr[right]] = [arr[right], arr[pivotIndex]];
    let storeIndex = left;
    
    for (let i = left; i < right; i++) {
        if (arr[i] < pivotValue) {
            // Move smaller elements to the left
            [arr[storeIndex], arr[i]] = [arr[i], arr[storeIndex]];
            storeIndex++;
        }
    }
    
    // Move pivot to its final place
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

function findKthSmallest(arr: number[], k: number): number {
    if (k < 1 || k > arr.length) {
        throw new Error("k is out of bounds");
    }
    // k-1 because we want the k-th smallest (1-indexed)
    return quickSelect(arr.slice(), 0, arr.length - 1, k - 1);
}

// Example usage:
const arr2 = [3, 2, 1, 5, 6, 4];
const k2 = 2;
console.log(findKthSmallest(arr2, k2)); // Output: 2
