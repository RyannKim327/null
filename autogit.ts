function countingSort(arr: number[]): number[] {
    if (arr.length === 0) {
        return [];
    }

    // Step 1: Find the maximum and minimum values
    const minValue = Math.min(...arr);
    const maxValue = Math.max(...arr);
    const range = maxValue - minValue + 1;

    // Step 2: Create the count array
    const count: number[] = new Array(range).fill(0);

    // Step 3: Count the occurrences of each value in the input array
    for (const num of arr) {
        count[num - minValue]++;
    }

    // Step 4: Calculate the cumulative sum in the count array
    for (let i = 1; i < count.length; i++) {
        count[i] += count[i - 1];
    }

    // Step 5: Build the output array
    const output: number[] = new Array(arr.length);
    for (let i = arr.length - 1; i >= 0; i--) {
        const num = arr[i];
        output[count[num - minValue] - 1] = num;
        count[num - minValue]--;
    }

    return output;
}

// Example usage
const arr = [4, 2, 2, 8, 3, 3, 1];
const sortedArr = countingSort(arr);
console.log(sortedArr); // Output: [1, 2, 2, 3, 3, 4, 8]
