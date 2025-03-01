function mergeSort(arr: number[]): number[] {
    // Base case: if the array has 1 or 0 elements, it's already sorted
    if (arr.length <= 1) {
        return arr;
    }

    // Split the array in half
    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid)); // Sort the left half
    const right = mergeSort(arr.slice(mid));    // Sort the right half

    // Merge the sorted halves
    return merge(left, right);
}

function merge(left: number[], right: number[]): number[] {
    const result: number[] = [];
    let leftIndex = 0;
    let rightIndex = 0;

    // Merge process
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }

    // If there are remaining elements in left or right arrays, add them to the result
    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

// Example usage
const array = [38, 27, 43, 3, 9, 82, 10];
const sortedArray = mergeSort(array);
console.log(sortedArray);  // Output: [3, 9, 10, 27, 38, 43, 82]
