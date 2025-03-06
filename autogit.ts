function countingSort(arr: number[], max: number): number[] {
    // Create a count array with a size of max + 1 (to include max value)
    const count: number[] = new Array(max + 1).fill(0);
    
    // Count occurrences of each number in the input array
    for (let num of arr) {
        count[num]++;
    }
    
    // Build the output array
    const output: number[] = [];
    for (let i = 0; i < count.length; i++) {
        for (let j = 0; j < count[i]; j++) {
            output.push(i);
        }
    }
    
    return output;
}

// Example usage
const arr = [4, 2, 2, 8, 3, 3, 1];
const max = Math.max(...arr);
const sortedArr = countingSort(arr, max);
console.log(sortedArr); // Output: [1, 2, 2, 3, 3, 4, 8]
