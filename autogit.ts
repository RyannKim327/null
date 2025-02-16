function countingSort(arr: number[], max: number): number[] {
    // Create a count array to store the count of each unique value
    const count: number[] = new Array(max + 1).fill(0);
    
    // Count each element in the input array
    for (const num of arr) {
        count[num]++;
    }

    // Build the output array
    const output: number[] = [];
    for (let i = 0; i < count.length; i++) {
        // For each value, add it to the output array based on its count
        for (let j = 0; j < count[i]; j++) {
            output.push(i);
        }
    }

    return output;
}

// Example usage:
const arr = [4, 2, 2, 8, 3, 3, 1];
const max = Math.max(...arr); // Find the maximum value in the array
const sortedArr = countingSort(arr, max);
console.log(sortedArr); // Output: [1, 2, 2, 3, 3, 4, 8]
