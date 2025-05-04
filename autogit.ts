function merge(left: number[], right: number[]): number[] {
    let result: number[] = [];
    let i = 0; // Pointer for left array
    let j = 0; // Pointer for right array

    // Merge the two arrays while comparing elements
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }

    // Push any remaining elements from left array
    while (i < left.length) {
        result.push(left[i]);
        i++;
    }

    // Push any remaining elements from right array
    while (j < right.length) {
        result.push(right[j]);
        j++;
    }

    return result;
}

function mergeSort(arr: number[]): number[] {
    // Base case: arrays with 0 or 1 element are already sorted
    if (arr.length <= 1) {
        return arr;
    }

    // Split the array into two halves
    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));

    // Merge the sorted halves
    return merge(left, right);
}

// Example usage
const arrayToSort = [38, 27, 43, 3, 9, 82, 10];
const sortedArray = mergeSort(arrayToSort);
console.log(sortedArray); // Output: [3, 9, 10, 27, 38, 43, 82]
