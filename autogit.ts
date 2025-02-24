function merge(left: number[], right: number[]): number[] {
    let result: number[] = [];
    let i = 0, j = 0;

    // Merge the two arrays into a result array
    while (i < left.length && j < right.length) {
        if (left[i] <= right[j]) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }

    // Add remaining elements from left
    while (i < left.length) {
        result.push(left[i]);
        i++;
    }

    // Add remaining elements from right
    while (j < right.length) {
        result.push(right[j]);
        j++;
    }

    return result;
}

function iterativeMergeSort(arr: number[]): number[] {
    if (arr.length < 2) return arr;

    let width = 1;

    // Loop until the width of the subarrays is less than the length of the array
    while (width < arr.length) {
        let merged: number[] = [];
        let i = 0;

        // Merge adjacent subarrays of the current width
        while (i < arr.length) {
            const left = arr.slice(i, Math.min(i + width, arr.length));
            const right = arr.slice(i + width, Math.min(i + width + width, arr.length));
            merged = merged.concat(merge(left, right));
            i += width * 2;
        }

        arr = merged; // Update the array with the merged result
        width *= 2;   // Double the width for the next iteration
    }

    return arr;
}

// Example usage
const array = [38, 27, 43, 3, 9, 82, 10];
const sortedArray = iterativeMergeSort(array);
console.log(sortedArray); // Output: [3, 9, 10, 27, 38, 43, 82]
