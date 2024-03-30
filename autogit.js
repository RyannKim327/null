function selectionSort(arr) {
    const n = arr.length;

    for (let i = 0; i < n; i++) {
        let minIndex = i;
        
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        
        if (minIndex !== i) {
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
        }
    }

    return arr;
}

// Test the selectionSort function
const array = [64, 25, 12, 22, 11];
console.log("Original array: ", array);
console.log("Sorted array: ", selectionSort(array));
