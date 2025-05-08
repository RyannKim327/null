function countingSort(arr: number[]): number[] {
    if (arr.length === 0) {
        return [];
    }

    // Step 1: Find the range
    const min = Math.min(...arr);
    const max = Math.max(...arr);
    
    // Step 2: Create a count array
    const range = max - min + 1; // inclusive range
    const count = new Array(range).fill(0);

    // Step 3: Count occurrences
    arr.forEach(num => {
        count[num - min]++;
    });

    // Step 4: Modify count array to store cumulative counts
    for (let i = 1; i < count.length; i++) {
        count[i] += count[i - 1];
    }

    // Step 5: Build the output array
    const output = new Array(arr.length);
    for (let i = arr.length - 1; i >= 0; i--) {
        const num = arr[i];
        output[count[num - min] - 1] = num; // Place the number in the output array
        count[num - min]--; // Decrease count
    }

    return output;
}

// Example usage:
const arr = [4, 2, 2, 8, 3, 3, 1];
const sortedArr = countingSort(arr);
console.log(sortedArr); // Output: [1, 2, 2, 3, 3, 4, 8]
