function bubbleSort(arr) {
    let len = arr.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

// Test the algorithm
const myArray = [7, 2, 5, 3, 8, 1, 6, 4];
console.log("Original array:", myArray);
const sortedArray = bubbleSort(myArray);
console.log("Sorted array:", sortedArray);
