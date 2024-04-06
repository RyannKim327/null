function selectionSort(arr) {
    const len = arr.length;
    for (let i = 0; i < len; i++) {
        let minIndex = i;
        for (let j = i + 1; j < len; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        if (minIndex !== i) {
            let temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
        }
    }
    return arr;
}

// Example usage
const arr = [64, 25, 12, 22, 11];
console.log("Original array: ", arr);
const sortedArr = selectionSort(arr);
console.log("Sorted array: ", sortedArr);
