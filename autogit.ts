function kthSmallest(arr: number[], k: number): number {
    if (k < 1 || k > arr.length) {
        throw new Error("k is out of bounds");
    }
    arr.sort((a, b) => a - b);
    return arr[k - 1];  // k - 1 because of zero-indexing
}

// Example usage
const array = [7, 10, 4, 3, 20, 15];
const k = 3;
console.log(kthSmallest(array, k));  // Output: 7
function quickSelect(arr: number[], left: number, right: number, k: number): number {
    if (left === right) {
        return arr[left]; // Only one element in array
    }

    const pivotIndex = Math.floor((right + left) / 2);
    const pivot = arr[pivotIndex];

    // Move pivot to end
    [arr[pivotIndex], arr[right]] = [arr[right], arr[pivotIndex]];
    let storeIndex = left;

    for (let i = left; i < right; i++) {
        if (arr[i] < pivot) {
            [arr[storeIndex], arr[i]] = [arr[i], arr[storeIndex]];
            storeIndex++;
        }
    }

    // Move pivot to its final place
    [arr[storeIndex], arr[right]] = [arr[right], arr[storeIndex]];

    if (k === storeIndex) {
        return arr[storeIndex];
    } else if (k < storeIndex) {
        return quickSelect(arr, left, storeIndex - 1, k);
    } else {
        return quickSelect(arr, storeIndex + 1, right, k);
    }
}

function kthSmallest(arr: number[], k: number): number {
    if (k < 1 || k > arr.length) {
        throw new Error("k is out of bounds");
    }
    return quickSelect(arr, 0, arr.length - 1, k - 1);
}

// Example usage
const array = [7, 10, 4, 3, 20, 15];
const k = 3;
console.log(kthSmallest(array, k));  // Output: 7
