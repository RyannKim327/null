function mergeSort(arr: number[]): number[] {
    // Base case: if the array has 1 or 0 elements, it is already sorted
    if (arr.length <= 1) {
        return arr;
    }

    // Find the middle index
    const mid = Math.floor(arr.length / 2);

    // Recursively split and sort the left half and the right half
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));

    // Merge the sorted halves
    return merge(left, right);
}

function merge(left: number[], right: number[]): number[] {
    let result: number[] = [];
    let i = 0; // Pointer for left array
    let j = 0; // Pointer for right array

    // Merge the two arrays while there are elements in both arrays
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result.push(left[i]); // Add smaller element to result
            i++;
        } else {
            result.push(right[j]); // Add smaller element to result
            j++;
        }
    }

    // If there are remaining elements in the left array, add them
    while (i < left.length) {
        result.push(left[i]);
        i++;
    }

    // If there are remaining elements in the right array, add them
    while (j < right.length) {
        result.push(right[j]);
        j++;
    }

    return result;
}

// Example usage:
const array = [38, 27, 43, 3, 9, 82, 10];
const sortedArray = mergeSort(array);
console.log(sortedArray); // Output: [3, 9, 10, 27, 38, 43, 82]
