function merge(left: number[], right: number[]): number[] {
    const result: number[] = [];
    let leftIndex = 0;
    let rightIndex = 0;

    // Compare elements from left and right arrays and merge them in sorted order
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }

    // Concatenate any remaining elements from the left array
    while (leftIndex < left.length) {
        result.push(left[leftIndex]);
        leftIndex++;
    }

    // Concatenate any remaining elements from the right array
    while (rightIndex < right.length) {
        result.push(right[rightIndex]);
        rightIndex++;
    }

    return result;
}

function mergeSort(array: number[]): number[] {
    // Base case: arrays with 0 or 1 element are already sorted
    if (array.length <= 1) {
        return array;
    }

    // Split the array into two halves
    const mid = Math.floor(array.length / 2);
    const left = mergeSort(array.slice(0, mid));
    const right = mergeSort(array.slice(mid));

    // Merge the sorted halves
    return merge(left, right);
}

// Example usage
const unsortedArray = [38, 27, 43, 3, 9, 82, 10];
const sortedArray = mergeSort(unsortedArray);
console.log(sortedArray); // Output: [3, 9, 10, 27, 38, 43, 82]
