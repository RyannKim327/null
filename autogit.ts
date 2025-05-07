function merge<T>(left: T[], right: T[]): T[] {
    const merged: T[] = [];
    let i = 0;
    let j = 0;

    // Compare and merge elements from left and right arrays
    while (i < left.length && j < right.length) {
        if (left[i] <= right[j]) {
            merged.push(left[i]);
            i++;
        } else {
            merged.push(right[j]);
            j++;
        }
    }

    // Add remaining elements of left (if any)
    while (i < left.length) {
        merged.push(left[i]);
        i++;
    }

    // Add remaining elements of right (if any)
    while (j < right.length) {
        merged.push(right[j]);
        j++;
    }

    return merged;
}

function iterativeMergeSort<T>(arr: T[]): T[] {
    const n = arr.length;
    let size = 1;

    // Outer loop for sizes of subarrays to merge
    while (size < n) {
        for (let leftStart = 0; leftStart < n; leftStart += size * 2) {
            const mid = Math.min(leftStart + size, n);
            const rightEnd = Math.min(leftStart + size * 2, n);

            const leftArray = arr.slice(leftStart, mid);
            const rightArray = arr.slice(mid, rightEnd);
            const merged = merge(leftArray, rightArray);

            // Copy merged array back into the original array
            for (let k = 0; k < merged.length; k++) {
                arr[leftStart + k] = merged[k];
            }
        }
        size *= 2; // Increase the size of the subarray to be merged
    }

    return arr;
}

// Example usage:
const array = [38, 27, 43, 3, 9, 82, 10];
const sortedArray = iterativeMergeSort(array);
console.log(sortedArray); // Output: [3, 9, 10, 27, 38, 43, 82]
