function bubbleSort(arr) {
    let len = arr.length;
    let swapped;

    do {
        swapped = false;
        for (let i = 0; i < len - 1; i++) {
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
const unsortedArray = [4, 2, 7, 1, 3];
const sortedArray = bubbleSort(unsortedArray);

console.log(sortedArray); // Output: [1, 2, 3, 4, 7]
