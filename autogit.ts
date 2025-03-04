function countingSort(arr: number[], maxVal: number): number[] {
    // Create an array to store the count of each unique value
    const count: number[] = new Array(maxVal + 1).fill(0);
    const output: number[] = new Array(arr.length);
    
    // Count each element in the input array
    for (let num of arr) {
        count[num]++;
    }
    
    // Modify the count array such that each element at each index
    // contains the actual position of this element in the output array
    for (let i = 1; i <= maxVal; i++) {
        count[i] += count[i - 1];
    }

    // Build the output array
    for (let i = arr.length - 1; i >= 0; i--) {
        const num = arr[i];
        output[count[num] - 1] = num; // Place the number in the correct position
        count[num]--; // Decrease the count for the duplicated number
    }

    return output;
}

// Example usage:
const arr = [4, 2, 2, 8, 3, 3, 1];
const maxVal = Math.max(...arr);
const sortedArray = countingSort(arr, maxVal);
console.log(sortedArray); // Output: [1, 2, 2, 3, 3, 4, 8]
