function merge(left: number[], right: number[]): number[] {
    let result: number[] = [];
    let i = 0;
    let j = 0;

    // Merge the two arrays
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }

    // Push remaining elements from left array, if any
    while (i < left.length) {
        result.push(left[i]);
        i++;
    }

    // Push remaining elements from right array, if any
    while (j < right.length) {
        result.push(right[j]);
        j++;
    }

    return result;
}

function iterativeMergeSort(arr: number[]): number[] {
    const n = arr.length;
    if (n < 2) return arr;

    let size = 1;
    while (size < n) {
        let left = 0;

        // For each pair of subarrays of size "size"
        while (left < n) {
            // Find the mid point and right end point of the subarrays
            const mid = Math.min(left + size, n);
            const right = Math.min(left + 2 * size, n);
            
            // Merge the two halves
            const mergedArray = merge(arr.slice(left, mid), arr.slice(mid, right));

            // Copy mergedArray back to the original array
            for (let k = 0; k < mergedArray.length; k++) {
                arr[left + k] = mergedArray[k];
            }

            left += 2 * size; // Move to the next pair of subarrays
        }

        size *= 2; // Double the size for the next iteration
    }

    return arr;
}

// Example usage
const arr = [38, 27, 43, 3, 9, 82, 10];
console.log(iterativeMergeSort(arr)); // Output: [3, 9, 10, 27, 38, 43, 82]
