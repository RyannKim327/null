function countingSort(arr: number[], maxValue: number): number[] {
    // Create a count array with a size of maxValue + 1
    const count: number[] = new Array(maxValue + 1).fill(0);
    const output: number[] = new Array(arr.length);

    // Count occurrences of each element
    for (let i = 0; i < arr.length; i++) {
        count[arr[i]]++;
    }

    // Update the count array to have the actual position of elements in the output
    for (let i = 1; i <= maxValue; i++) {
        count[i] += count[i - 1];
    }

    // Build the output array
    for (let i = arr.length - 1; i >= 0; i--) {
        output[count[arr[i]] - 1] = arr[i];
        count[arr[i]]--;
    }

    return output;
}

// Example usage
const arr = [4, 2, 2, 8, 3, 3, 1];
const maxValue = Math.max(...arr); // Determine the maximum value in the array
const sortedArr = countingSort(arr, maxValue);
console.log(sortedArr); // Output: [1, 2, 2, 3, 3, 4, 8]
