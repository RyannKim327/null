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
let arr = [5, 3, 8, 1, 2];
console.log("Original array:", arr);
let sortedArr = insertionSort(arr);
console.log("Sorted array:", sortedArr);
