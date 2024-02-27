function bubbleSort(arr) {
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap arr[j] and arr[j+1]
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
}

// Test the bubbleSort function
const arr = [64, 34, 25, 12, 22, 11, 90];
console.log("Unsorted array: " + arr);
console.log("Sorted array: " + bubbleSort(arr));
