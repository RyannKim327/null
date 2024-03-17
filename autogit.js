function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let currentVal = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > currentVal) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = currentVal;
    }
    return arr;
}

// Example usage:
let arr = [12, 11, 13, 5, 6];
console.log("Original array:", arr);
console.log("Sorted array:", insertionSort(arr));
