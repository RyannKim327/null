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

// Example usage:
const numbers = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
console.log(bubbleSort(numbers));
