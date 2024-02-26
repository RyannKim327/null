function bubbleSort(arr) {
    const length = arr.length;
    for (let i = 0; i < length; i++) {
        for (let j = 0; j < length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap the elements
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
console.log("Original array: " + array);
const sortedArray = bubbleSort(array);
console.log("Sorted array: " + sortedArray);
