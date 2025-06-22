function findKthSmallest(arr: number[], k: number): number {
    if (k < 1 || k > arr.length) {
        throw new Error("k is out of bounds");
    }

    // Step 1: Sort the array
    const sortedArray = [...arr].sort((a, b) => a - b);

    // Step 2: Return the kth smallest element
    return sortedArray[k - 1];
}

// Example usage:
const array = [7, 10, 4, 3, 20, 15];
const k = 3;
console.log(findKthSmallest(array, k)); // Output: 7
function findKthSmallestQuickselect(arr: number[], k: number): number {
    if (k < 1 || k > arr.length) {
        throw new Error("k is out of bounds");
    }

    function quickselect(low: number, high: number, kIndex: number): number {
        if (low === high) {
            return arr[low];
        }

        // Step 1: Partition the array
        const pivotIndex = partition(low, high);

        // Step 2: Check if the pivot is the kth smallest
        if (pivotIndex === kIndex) {
            return arr[pivotIndex];
        } else if (pivotIndex > kIndex) {
            // Recur on the left partition
            return quickselect(low, pivotIndex - 1, kIndex);
        } else {
            // Recur on the right partition
            return quickselect(pivotIndex + 1, high, kIndex);
        }
    }

    function partition(low: number, high: number): number {
        const pivot = arr[high];
        let i = low;

        for (let j = low; j < high; j++) {
            if (arr[j] < pivot) {
                [arr[i], arr[j]] = [arr[j], arr[i]];
                i++;
            }
        }

        // Place the pivot in its correct position
        [arr[i], arr[high]] = [arr[high], arr[i]];
        return i;
    }

    // Start the Quickselect process
    return quickselect(0, arr.length - 1, k - 1);
}

// Example usage:
const array = [7, 10, 4, 3, 20, 15];
const k = 3;
console.log(findKthSmallestQuickselect(array, k)); // Output: 7
