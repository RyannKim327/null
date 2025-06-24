function findKthSmallestBySorting(arr: number[], k: number): number {
    if (k < 1 || k > arr.length) {
        throw new Error("k is out of bounds");
    }

    // Sort the array in ascending order
    const sortedArr = arr.slice().sort((a, b) => a - b);

    // Return the kth smallest element (1-based index)
    return sortedArr[k - 1];
}

// Example usage:
const arr = [7, 10, 4, 3, 20, 15];
const k = 3;
console.log(findKthSmallestBySorting(arr, k)); // Output: 7
function findKthSmallestByQuickselect(arr: number[], k: number): number {
    if (k < 1 || k > arr.length) {
        throw new Error("k is out of bounds");
    }

    const quickselect = (arr: number[], left: number, right: number, k: number): number => {
        if (left === right) {
            return arr[left];
        }

        // Partition the array around a pivot
        const pivotIndex = partition(arr, left, right);

        if (k === pivotIndex) {
            return arr[k];
        } else if (k < pivotIndex) {
            return quickselect(arr, left, pivotIndex - 1, k);
        } else {
            return quickselect(arr, pivotIndex + 1, right, k);
        }
    };

    const partition = (arr: number[], left: number, right: number): number => {
        const pivot = arr[right]; // Choose the rightmost element as pivot
        let i = left;

        for (let j = left; j < right; j++) {
            if (arr[j] <= pivot) {
                [arr[i], arr[j]] = [arr[j], arr[i]]; // Swap elements
                i++;
            }
        }

        // Place the pivot in its correct position
        [arr[i], arr[right]] = [arr[right], arr[i]];
        return i;
    };

    // Convert k to 0-based index
    return quickselect(arr.slice(), 0, arr.length - 1, k - 1);
}

// Example usage:
const arr = [7, 10, 4, 3, 20, 15];
const k = 3;
console.log(findKthSmallestByQuickselect(arr, k)); // Output: 7
