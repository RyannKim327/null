function findKthSmallest(arr: number[], k: number): number {
    if (k < 1 || k > arr.length) {
        throw new Error("k is out of bounds");
    }

    // Sort the array in ascending order
    const sortedArray = [...arr].sort((a, b) => a - b);

    // Return the kth smallest element
    return sortedArray[k - 1];
}

// Example usage
const array = [7, 10, 4, 3, 20, 15];
const k = 3;
console.log(findKthSmallest(array, k)); // Output: 7
function findKthSmallest(arr: number[], k: number): number {
    if (k < 1 || k > arr.length) {
        throw new Error("k is out of bounds");
    }

    const quickselect = (left: number, right: number, kIndex: number): number => {
        if (left === right) {
            return arr[left];
        }

        // Partition the array around a random pivot
        const pivotIndex = partition(left, right);

        if (pivotIndex === kIndex) {
            return arr[pivotIndex];
        } else if (pivotIndex > kIndex) {
            return quickselect(left, pivotIndex - 1, kIndex);
        } else {
            return quickselect(pivotIndex + 1, right, kIndex);
        }
    };

    const partition = (left: number, right: number): number => {
        const pivot = arr[right]; // Choose the last element as pivot
        let i = left;

        for (let j = left; j < right; j++) {
            if (arr[j] < pivot) {
                [arr[i], arr[j]] = [arr[j], arr[i]]; // Swap elements
                i++;
            }
        }

        // Place the pivot in its correct position
        [arr[i], arr[right]] = [arr[right], arr[i]];
        return i;
    };

    return quickselect(0, arr.length - 1, k - 1);
}

// Example usage
const array = [7, 10, 4, 3, 20, 15];
const k = 3;
console.log(findKthSmallest(array, k)); // Output: 7
