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
const arr = [7, 10, 4, 3, 20, 15];
const k = 3;
console.log(kthSmallest(arr, k)); // Output: 7
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
    [arr[right], arr[storeIndex]] = [arr[storeIndex], arr[right]];
    return storeIndex;
}

function quickselect(arr: number[], left: number, right: number, k: number): number {
    if (left === right) {
        return arr[left]; // Only one element
    }

    const pivotIndex = Math.floor(Math.random() * (right - left + 1)) + left;
    const newPivotIndex = partition(arr, left, right, pivotIndex);

    if (k === newPivotIndex) {
        return arr[k];
    } else if (k < newPivotIndex) {
        return quickselect(arr, left, newPivotIndex - 1, k);
    } else {
        return quickselect(arr, newPivotIndex + 1, right, k);
    }
}

function kthSmallest(arr: number[], k: number): number {
    if (k < 1 || k > arr.length) {
        throw new Error("k is out of bounds");
    }
    
    // Convert k to zero-based index
    return quickselect(arr, 0, arr.length - 1, k - 1);
}

// Example usage:
const arr = [7, 10, 4, 3, 20, 15];
const k = 3;
console.log(kthSmallest(arr, k)); // Output: 7
