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
        len--;
    } while (swapped);

    return arr;
}

// Example usage:
const numbers = [5, 3, 8, 1, 2];
console.log(bubbleSort(numbers)); // [1, 2, 3, 5, 8]
