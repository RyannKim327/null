function quickSelect(arr: number[], left: number, right: number, k: number): number {
    if (left === right) {
        return arr[left];
    }

    const pivotIndex = partition(arr, left, right);
    
    // The pivot is in its final sorted position
    if (k === pivotIndex) {
        return arr[k];
    } else if (k < pivotIndex) {
        return quickSelect(arr, left, pivotIndex - 1, k);
    } else {
        return quickSelect(arr, pivotIndex + 1, right, k);
    }
}

function partition(arr: number[], left: number, right: number): number {
    const pivot = arr[right];
    let i = left;

    for (let j = left; j < right; j++) {
        if (arr[j] < pivot) {
            [arr[i], arr[j]] = [arr[j], arr[i]]; // swap
            i++;
        }
    }
    
    [arr[i], arr[right]] = [arr[right], arr[i]]; // swap the pivot to its final place
    return i;
}

function findKthSmallest(arr: number[], k: number): number {
    if (k < 1 || k > arr.length) {
        throw new Error("k is out of bounds");
    }
    return quickSelect(arr, 0, arr.length - 1, k - 1); // k-1 for zero-based index
}

// Example usage:
const arr = [3, 2, 1, 5, 6, 4];
const k = 2;
console.log(findKthSmallest(arr, k)); // Output: 2
