function countingSort(arr: number[]): number[] {
    if (arr.length === 0) return arr; // Handle empty array case

    // Step 1: Find the minimum and maximum values in the array
    const min = Math.min(...arr);
    const max = Math.max(...arr);

    // Step 2: Create a counting array initialized to 0
    const count: number[] = new Array(max - min + 1).fill(0);

    // Step 3: Populate the counting array with frequencies
    for (const num of arr) {
        count[num - min]++;
    }

    // Step 4: Reconstruct the sorted array
    let index = 0;
    for (let i = 0; i < count.length; i++) {
        while (count[i] > 0) {
            arr[index++] = i + min; // Place the value back into the original array
            count[i]--;
        }
    }

    return arr;
}

// Example Usage
const inputArray = [4, 2, 2, 8, 3, 3, 1];
console.log("Original Array:", inputArray);
const sortedArray = countingSort(inputArray);
console.log("Sorted Array:", sortedArray);
Original Array: [4, 2, 2, 8, 3, 3, 1]
Sorted Array: [1, 2, 2, 3, 3, 4, 8]
