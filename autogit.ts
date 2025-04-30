function bubbleSort(arr: number[]): number[] {
    const n = arr.length;
    
    // Loop through the array
    for (let i = 0; i < n; i++) {
        // Last i elements are already sorted, no need to check them
        for (let j = 0; j < n - i - 1; j++) {
            // If the current element is greater than the next element, swap them
            if (arr[j] > arr[j + 1]) {
                // Swap
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    
    return arr;
}

// Example usage
const array = [64, 34, 25, 12, 22, 11, 90];
const sortedArray = bubbleSort(array);
console.log(sortedArray); // Output: [11, 12, 22, 25, 34, 64, 90]
