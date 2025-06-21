function quickSort(arr: number[]): number[] {
    // Base case: arrays with 0 or 1 elements are already sorted
    if (arr.length <= 1) {
        return arr;
    }

    // Step 1: Choose a pivot (we'll use the last element for simplicity)
    const pivot = arr[arr.length - 1];

    // Step 2: Partition the array into two subarrays
    const left: number[] = [];  // Elements less than or equal to the pivot
    const right: number[] = []; // Elements greater than the pivot

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] <= pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    // Step 3: Recursively sort the left and right subarrays
    const sortedLeft = quickSort(left);
    const sortedRight = quickSort(right);

    // Step 4: Combine the sorted subarrays with the pivot
    return [...sortedLeft, pivot, ...sortedRight];
}

// Example usage:
const unsortedArray = [10, 7, 8, 9, 1, 5];
const sortedArray = quickSort(unsortedArray);
console.log("Sorted Array:", sortedArray);
function quickSortInPlace(arr: number[], low: number = 0, high: number = arr.length - 1): void {
    if (low < high) {
        const pivotIndex = partition(arr, low, high);
        quickSortInPlace(arr, low, pivotIndex - 1);
        quickSortInPlace(arr, pivotIndex + 1, high);
    }
}

function partition(arr: number[], low: number, high: number): number {
    const pivot = arr[high];
    let i = low - 1;

    for (let j = low; j < high; j++) {
        if (arr[j] <= pivot) {
            i++;
            [arr[i], arr[j]] = [arr[j], arr[i]]; // Swap
        }
    }

    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]]; // Place pivot in the correct position
    return i + 1;
}

// Example usage:
const unsortedArray = [10, 7, 8, 9, 1, 5];
quickSortInPlace(unsortedArray);
console.log("Sorted Array:", unsortedArray);
