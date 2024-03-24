function bubbleSort(arr) {
    const len = arr.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap elements
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

// Example usage
const array = [64, 25, 12, 22, 11];
console.log("Original Array: " + array);
const sortedArray = bubbleSort(array);
console.log("Sorted Array: " + sortedArray);
