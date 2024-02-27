function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let current = arr[i];
        let j = i - 1;

        while (j >= 0 && arr[j] > current) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }

        arr[j + 1] = current;
    }

    return arr;
}

// Example usage
const array = [7, 2, 4, 1, 5, 3];
console.log(insertionSort(array)); // Output: [1, 2, 3, 4, 5, 7]
