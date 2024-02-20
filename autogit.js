function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let key = arr[i];
        let j = i - 1;

        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }

        arr[j + 1] = key;
    }

    return arr;
}

// Test the insertion sort algorithm
const arr = [12, 11, 13, 5, 6];
console.log("Original Array: " + arr);
console.log("Sorted Array: " + insertionSort(arr));
