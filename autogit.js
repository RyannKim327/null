function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let current = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > current) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = current;
    }
    return arr;
}

// Example usage
const array = [5, 3, 8, 2, 1, 4];
console.log("Original array:", array);
console.log("Sorted array:", insertionSort(array));
