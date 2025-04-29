function mergeSort(arr: number[]): number[] {
    // Base case: if the array is of length 0 or 1, it's already sorted
    if (arr.length <= 1) {
        return arr;
    }

    // Step 1: Divide the array into two halves
    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);

    // Step 2: Recursively sort both halves
    const sortedLeft = mergeSort(left);
    const sortedRight = mergeSort(right);

    // Step 3: Merge the sorted halves
    return merge(sortedLeft, sortedRight);
}

function merge(left: number[], right: number[]): number[] {
    const result: number[] = [];
    let i = 0, j = 0;

    // Compare elements from left and right arrays and push the smaller element into the result
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }

    // If there are remaining elements in the left array, add them to the result
    while (i < left.length) {
        result.push(left[i]);
        i++;
    }

    // If there are remaining elements in the right array, add them to the result
    while (j < right.length) {
        result.push(right[j]);
        j++;
    }

    return result;
}

// Example usage:
const arr = [38, 27, 43, 3, 9, 82, 10];
const sortedArr = mergeSort(arr);
console.log(sortedArr);  // Output: [3, 9, 10, 27, 38, 43, 82]
