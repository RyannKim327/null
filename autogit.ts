function kthSmallestSorting(arr: number[], k: number): number {
    if (k < 1 || k > arr.length) {
        throw new Error("k is out of bounds");
    }

    arr.sort((a, b) => a - b); // Sort in ascending order
    return arr[k - 1]; // k-th smallest element (1-based index)
}

// Example usage:
const arr = [7, 10, 4, 3, 20, 15];
const k = 3;
console.log(kthSmallestSorting(arr, k)); // Output: 7
function partition(arr: number[], low: number, high: number, pivotIndex: number): number {
    const pivotValue = arr[pivotIndex];
    let storeIndex = low;

    // Move pivot to end
    [arr[pivotIndex], arr[high]] = [arr[high], arr[pivotIndex]];

    for (let i = low; i < high; i++) {
        if (arr[i] < pivotValue) {
            [arr[storeIndex], arr[i]] = [arr[i], arr[storeIndex]];
            storeIndex++;
        }
    }

    // Move pivot to its final place
    [arr[storeIndex], arr[high]] = [arr[high], arr[storeIndex]];
    return storeIndex;
}

function quickSelect(arr: number[], low: number, high: number, k: number): number {
    if (low === high) {
        return arr[low];
    }

    const pivotIndex = Math.floor(Math.random() * (high - low + 1)) + low;
    const newPivotIndex = partition(arr, low, high, pivotIndex);

    if (k === newPivotIndex) {
        return arr[newPivotIndex];
    } else if (k < newPivotIndex) {
        return quickSelect(arr, low, newPivotIndex - 1, k);
    } else {
        return quickSelect(arr, newPivotIndex + 1, high, k);
    }
}

function kthSmallestQuickselect(arr: number[], k: number): number {
    if (k < 1 || k > arr.length) {
        throw new Error("k is out of bounds");
    }

    return quickSelect(arr, 0, arr.length - 1, k - 1); // k-1 for 0-based index
}

// Example usage:
const arr2 = [7, 10, 4, 3, 20, 15];
const k2 = 3;
console.log(kthSmallestQuickselect(arr2, k2)); // Output: 7
