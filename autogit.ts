function mergeSort<T>(array: T[]): T[] {
    // Base case: arrays with 0 or 1 element are already sorted
    if (array.length <= 1) {
        return array;
    }

    // Split the array into two halves
    const mid = Math.floor(array.length / 2);
    const left = array.slice(0, mid);
    const right = array.slice(mid);

    // Recursively sort both halves
    const sortedLeft = mergeSort(left);
    const sortedRight = mergeSort(right);

    // Merge the sorted halves
    return merge(sortedLeft, sortedRight);
}

function merge<T>(left: T[], right: T[]): T[] {
    const result: T[] = [];
    let i = 0; // Pointer for the left array
    let j = 0; // Pointer for the right array

    // Merge the two arrays while there are elements in both
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
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

// Example usage
const numbers = [38, 27, 43, 3, 9, 82, 10];
const sortedNumbers = mergeSort(numbers);
console.log(sortedNumbers); // Output: [3, 9, 10, 27, 38, 43, 82]
