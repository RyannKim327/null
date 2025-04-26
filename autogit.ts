function kthSmallest(arr: number[], k: number): number {
    if (k < 1 || k > arr.length) {
        throw new Error("k is out of bounds");
    }
    
    // Sort the array
    const sortedArray = arr.slice().sort((a, b) => a - b);
    
    // Return the k-th smallest element (k-1 because of zero-based indexing)
    return sortedArray[k - 1];
}

// Example usage:
const array = [7, 10, 4, 3, 20, 15];
const k = 3;
console.log(kthSmallest(array, k)); // Output: 7
function kthSmallest(arr: number[], k: number): number {
    if (k < 1 || k > arr.length) {
        throw new Error("k is out of bounds");
    }

    function partition(left: number, right: number, pivotIndex: number): number {
        const pivotValue = arr[pivotIndex];
        // Move pivot to the end
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

    function quickSelect(left: number, right: number, k: number): number {
        if (left === right) {
            return arr[left]; // If there's only one element
        }

        // Choose a random pivotIndex
        const pivotIndex = Math.floor(Math.random() * (right - left + 1)) + left;
        const newPivotIndex = partition(left, right, pivotIndex);

        // The pivot is in its final position
        if (k === newPivotIndex) {
            return arr[k];
        } else if (k < newPivotIndex) {
            return quickSelect(left, newPivotIndex - 1, k);
        } else {
            return quickSelect(newPivotIndex + 1, right, k);
        }
    }

    // Convert k from 1-based to 0-based index
    return quickSelect(0, arr.length - 1, k - 1);
}

// Example usage:
const array = [7, 10, 4, 3, 20, 15];
const k = 3;
console.log(kthSmallest(array, k)); // Output: 7
