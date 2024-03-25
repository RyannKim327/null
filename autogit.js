function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let currentValue = arr[i];
        let j = i - 1;

        while (j >= 0 && arr[j] > currentValue) {
            arr[j + 1] = arr[j];
            j--;
        }

        arr[j + 1] = currentValue;
    }

    return arr;
}

// Example usage
let array = [5, 2, 4, 6, 1, 3];
console.log("Before sorting: " + array);
console.log("After sorting: " + insertionSort(array));
