function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    const pivot = arr[0];
    const left = [];
    const right = [];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    return quickSort(left).concat(pivot, quickSort(right));
}

// Example usage
const array = [3, 5, 2, 8, 1, 4, 7, 6];
const sortedArray = quickSort(array);
console.log(sortedArray);  // Output: [1, 2, 3, 4, 5, 6, 7, 8]
