function countingSort(array: number[]): number[] {
    if (array.length === 0) {
        return [];
    }

    // Find the maximum and minimum values in the array
    const max = Math.max(...array);
    const min = Math.min(...array);
    const range = max - min + 1;

    // Initialize the count array
    const count: number[] = new Array(range).fill(0);

    // Count each element's frequency
    for (const num of array) {
        count[num - min]++;
    }

    // Modify the count array by adding the cumulative sum
    for (let i = 1; i < count.length; i++) {
        count[i] += count[i - 1];
    }

    // Output array to hold sorted elements
    const output: number[] = new Array(array.length);

    // Build the output array
    for (let i = array.length - 1; i >= 0; i--) {
        const num = array[i];
        output[count[num - min] - 1] = num;
        count[num - min]--;
    }

    return output;
}

// Example usage
const inputArray = [4, 2, 2, 8, 3, 3, 1];
const sortedArray = countingSort(inputArray);
console.log(sortedArray); // Output: [1, 2, 2, 3, 3, 4, 8]
