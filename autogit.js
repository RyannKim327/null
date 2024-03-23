function bubbleSort(arr) {
    let len = arr.length;
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < len; i++) {
            if (arr[i] > arr[i + 1]) {
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = true;
            }
        }
    } while (swapped);

    return arr;
}

// Example usage
let arrayToSort = [5, 3, 8, 2, 1, 4];
console.log("Original Array: ", arrayToSort);
let sortedArray = bubbleSort(arrayToSort);
console.log("Sorted Array: ", sortedArray);
