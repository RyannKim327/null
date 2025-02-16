function mergeSort(arr: number[]): number[] {
    // Base case: an array of zero or one element is sorted
    if (arr.length <= 1) {
        return arr;
    }

    // Split the array in half
    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));

    // Merge the sorted halves
    return merge(left, right);
}

function merge(left: number[], right: number[]): number[] {
    const result: number[] = [];
    let i = 0; // Pointer for left array
    let j = 0; // Pointer for right array

    // Merge values until one array is exhausted
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }

    // If there are remaining elements in the left array
    while (i < left.length) {
        result.push(left[i]);
        i++;
    }

    // If there are remaining elements in the right array
    while (j < right.length) {
        result.push(right[j]);
        j++;
    }

    return result;
}

// Example usage
const array = [38, 27, 43, 3, 9, 82, 10];
const sortedArray = mergeSort(array);
console.log(sortedArray); // Output: [3, 9, 10, 27, 38, 43, 82]
