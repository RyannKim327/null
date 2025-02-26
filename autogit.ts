function kthSmallest(arr: number[], k: number): number | undefined {
    if (k <= 0 || k > arr.length) {
        return undefined; // Handle edge cases
    }

    const sortedArray = arr.slice().sort((a, b) => a - b);
    return sortedArray[k - 1]; // k-1 to get the correct index
}

// Example usage:
const arr = [7, 10, 4, 3, 20, 15];
const k = 3;
const result = kthSmallest(arr, k);
console.log(`The ${k}rd smallest element is: ${result}`);
function quickSelect(arr: number[], left: number, right: number, k: number): number {
    if (left === right) {
        return arr[left]; // If the list contains only one element
    }

    const pivotIndex = partition(arr, left, right);

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
            [arr[i], arr[j]] = [arr[j], arr[i]]; // Swap elements
            i++;
        }
    }
    [arr[i], arr[right]] = [arr[right], arr[i]]; // Swap pivot element
    return i; // Return position of the pivot
}

function kthSmallestQuickSelect(arr: number[], k: number): number | undefined {
    if (k <= 0 || k > arr.length) {
        return undefined; // Handle edge cases
    }
    return quickSelect(arr, 0, arr.length - 1, k - 1);
}

// Example usage:
const arrQuickSelect = [7, 10, 4, 3, 20, 15];
const kQuickSelect = 3;
const resultQuickSelect = kthSmallestQuickSelect(arrQuickSelect, kQuickSelect);
console.log(`The ${kQuickSelect}rd smallest element is: ${resultQuickSelect}`);
