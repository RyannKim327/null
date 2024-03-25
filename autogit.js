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

// Example usage
let myArray = [4, 2, 7, 1, 5, 3];
console.log("Original array:", myArray);
console.log("Sorted array:", bubbleSort(myArray));
