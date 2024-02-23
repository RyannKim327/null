function selectionSort(arr) {
    const n = arr.length;

    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;

        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }

        if (minIndex !== i) {
            [arr[minIndex], arr[i]] = [arr[i], arr[minIndex]];
        }
    }

    return arr;
}

// Example usage
const arr = [64, 25, 12, 22, 11];
console.log(selectionSort(arr)); // Output: [11, 12, 22, 25, 64]
