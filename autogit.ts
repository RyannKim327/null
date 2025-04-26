function mergeSort(arr: number[]): number[] {
    // Base case: if the array has 1 or 0 elements, it's already sorted
    if (arr.length <= 1) {
        return arr;
    }

    // Find the mid index to split the array into two halves
    const mid = Math.floor(arr.length / 2);

    // Recursively sort the left half and the right half
    const leftHalf = mergeSort(arr.slice(0, mid));
    const rightHalf = mergeSort(arr.slice(mid));

    // Merge the sorted halves
    return merge(leftHalf, rightHalf);
}

function merge(left: number[], right: number[]): number[] {
    let result: number[] = [];
    let i = 0;
    let j = 0;

    // Compare elements of left and right arrays and merge them in sorted order
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }

    // If there are remaining elements in left, add them to the result
    while (i < left.length) {
        result.push(left[i]);
        i++;
    }

    // If there are remaining elements in right, add them to the result
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
