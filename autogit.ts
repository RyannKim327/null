function countingSort(arr: number[], max: number): number[] {
    // Create a count array to store the count of each unique object
    const count: number[] = new Array(max + 1).fill(0);
    const output: number[] = new Array(arr.length);

    // Store the count of each number in the count array
    for (let i = 0; i < arr.length; i++) {
        count[arr[i]]++;
    }

    // Change count[i] so that it contains the actual position of this number in output array
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
const max = Math.max(...arr); // Find the maximum value in the array
const sortedArr = countingSort(arr, max);
console.log(sortedArr); // Output: [1, 2, 2, 3, 3, 4, 8]
