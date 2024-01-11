function selectionSort(arr) {
    // Implementation goes here
}
function selectionSort(arr) {
    let minIndex;
    // Implementation goes here
}
function selectionSort(arr) {
    let minIndex;
    for (let i = 0; i < arr.length - 1; i++) {
        // Implementation goes here
    }
}
function selectionSort(arr) {
    let minIndex;
    for (let i = 0; i < arr.length - 1; i++) {
        minIndex = i;
        // Implementation goes here
    }
}
function selectionSort(arr) {
    let minIndex;
    for (let i = 0; i < arr.length - 1; i++) {
        minIndex = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        // Implementation goes here
    }
}
function selectionSort(arr) {
    let minIndex;
    for (let i = 0; i < arr.length - 1; i++) {
        minIndex = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        // Swap the minimum element with the element at the current index
        let temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
    }
}
function selectionSort(arr) {
    let minIndex;
    for (let i = 0; i < arr.length - 1; i++) {
        minIndex = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        let temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
    }
    return arr;
}
let array = [5, 2, 8, 4, 1];
console.log(selectionSort(array)); // Output: [1, 2, 4, 5, 8]
