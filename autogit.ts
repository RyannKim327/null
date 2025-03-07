function kthSmallest(arr: number[], k: number): number {
    if (k < 1 || k > arr.length) {
        throw new Error("k is out of bounds");
    }
    
    // Sort the array
    const sortedArray = arr.slice().sort((a, b) => a - b);
    
    // Return the k-th smallest element (1-based index)
    return sortedArray[k - 1];
}

// Example usage:
const array = [7, 10, 4, 3, 20, 15];
const k = 3;
console.log(kthSmallest(array, k)); // Output: 7
function partition(arr: number[], left: number, right: number, pivotIndex: number): number {
    const pivotValue = arr[pivotIndex];
    // Move pivot to end
    [arr[pivotIndex], arr[right]] = [arr[right], arr[pivotIndex]];
    let storeIndex = left;

    for (let i = left; i < right; i++) {
        if (arr[i] < pivotValue) {
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

    const pivotIndex = left + Math.floor(Math.random() * (right - left + 1));
    const newPivotIndex = partition(arr, left, right, pivotIndex);

    if (k === newPivotIndex) {
        return arr[k];
    } else if (k < newPivotIndex) {
        return quickSelect(arr, left, newPivotIndex - 1, k);
    } else {
        return quickSelect(arr, newPivotIndex + 1, right, k);
    }
}

function kthSmallest(arr: number[], k: number): number {
    if (k < 1 || k > arr.length) {
        throw new Error("k is out of bounds");
    }
    
    // Convert k to 0-based index
    return quickSelect(arr, 0, arr.length - 1, k - 1);
}

// Example usage:
const array = [7, 10, 4, 3, 20, 15];
const k = 3;
console.log(kthSmallest(array, k)); // Output: 7
