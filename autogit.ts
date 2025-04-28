function mergeSortedArrays(left: number[], right: number[]): number[] {
    const result: number[] = [];
    let i = 0, j = 0;

    while (i < left.length && j < right.length) {
        if (left[i] <= right[j]) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }

    // Append any remaining elements
    return result.concat(left.slice(i)).concat(right.slice(j));
}

function mergeSortIterative(array: number[]): number[] {
    const n = array.length;
    let width = 1; // Subarray size to merge
    let sortedArray = array.slice(); // Work with a copy

    while (width < n) {
        let i = 0;

        while (i < n) {
            const leftStart = i;
            const mid = Math.min(i + width, n);
            const rightEnd = Math.min(i + 2 * width, n);

            const left = sortedArray.slice(leftStart, mid);
            const right = sortedArray.slice(mid, rightEnd);

            const merged = mergeSortedArrays(left, right);

            // Place merged subarray back into main array
            for (let j = 0; j < merged.length; j++) {
                sortedArray[leftStart + j] = merged[j];
            }

            i += 2 * width;
        }

        width *= 2; // Double the size for next pass
    }

    return sortedArray;
}

// Example usage:
const arr = [38, 27, 43, 3, 9, 82, 10];
console.log(mergeSortIterative(arr));
