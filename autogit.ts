function kthSmallest(arr: number[], k: number): number {
    // Sort the array
    const sortedArr = arr.slice().sort((a, b) => a - b);
    // Return the kth smallest element
    return sortedArr[k - 1]; // k is 1-based index
}

// Example usage:
const array = [7, 10, 4, 3, 20, 15];
const k = 3;
console.log(kthSmallest(array, k)); // Outputs: 7
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

function quickselect(arr: number[], left: number, right: number, k: number): number {
    if (left === right) {
        return arr[left];
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
    // Convert k to zero-based index
    return quickselect(arr, 0, arr.length - 1, k - 1);
}

// Example usage:
const array = [7, 10, 4, 3, 20, 15];
const k = 3;
console.log(kthSmallest(array, k)); // Outputs: 7
