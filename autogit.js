function bubbleSort(arr) {
    const len = arr.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap the elements
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
}

// Example usage
const array = [64, 34, 25, 12, 22, 11, 90];
console.log(bubbleSort(array)); // Output: [11, 12, 22, 25, 34, 64, 90]
