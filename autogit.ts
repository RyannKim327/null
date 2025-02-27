function mergeSort(arr: number[]): number[] {
    // Base case: if the array is of length 0 or 1, it's already sorted
    if (arr.length <= 1) {
        return arr;
    }

    // Find the middle index
    const middle = Math.floor(arr.length / 2);
    
    // Recursively sort the left half and right half
    const left = mergeSort(arr.slice(0, middle));
    const right = mergeSort(arr.slice(middle));

    // Merge the sorted halves
    return merge(left, right);
}

function merge(left: number[], right: number[]): number[] {
    let merged: number[] = [];
    let leftIndex = 0;
    let rightIndex = 0;

    // Compare elements from left and right arrays and merge them
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            merged.push(left[leftIndex]);
            leftIndex++;
        } else {
            merged.push(right[rightIndex]);
            rightIndex++;
        }
    }

    // Concatenate any remaining elements in left or right
    return merged.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

// Example usage
const unsortedArray = [38, 27, 43, 3, 9, 82, 10];
const sortedArray = mergeSort(unsortedArray);
console.log(sortedArray);
