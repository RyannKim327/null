function countingSort(arr: number[], max: number): number[] {
    // Create a count array with a size of max+1
    const count: number[] = new Array(max + 1).fill(0);
    const output: number[] = new Array(arr.length);

    // Count each element's occurrences
    for (let i = 0; i < arr.length; i++) {
        count[arr[i]]++;
    }

    // Update the count array to contain actual positions
    for (let i = 1; i <= max; i++) {
        count[i] += count[i - 1];
    }

    // Build the output array
    for (let i = arr.length - 1; i >= 0; i--) {
        output[count[arr[i]] - 1] = arr[i];
        count[arr[i]]--;
    }

    return output;
}

// Example usage:
const arr = [4, 2, 2, 8, 3, 3, 1];
const maxElement = Math.max(...arr);
const sortedArr = countingSort(arr, maxElement);
console.log(sortedArr); // Output: [1, 2, 2, 3, 3, 4, 8]
