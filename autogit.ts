function kthSmallest(arr: number[], k: number): number {
    // Sort the array in ascending order
    arr.sort((a, b) => a - b);
    // Return the k-1 indexed element, as k is 1-based
    return arr[k - 1];
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

function quickselect(arr: number[], left: number, right: number, k: number): number {
    if (left === right) {
        return arr[left];
    }

    const pivotIndex = Math.floor((right - left) / 2) + left;
    const index = partition(arr, left, right, pivotIndex);

    // The pivot is in its final sorted position
    if (k === index) {
        return arr[k];
    } else if (k < index) {
        return quickselect(arr, left, index - 1, k);
    } else {
        return quickselect(arr, index + 1, right, k);
    }
}

function kthSmallest(arr: number[], k: number): number {
    // k is 1-based, convert it to 0-based index
    return quickselect(arr, 0, arr.length - 1, k - 1);
}

// Example usage:
const array = [7, 10, 4, 3, 20, 15];
const k = 3;
console.log(kthSmallest(array, k)); // Output: 7
