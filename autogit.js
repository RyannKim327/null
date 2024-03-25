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

    return [...quickSort(left), pivot, ...quickSort(right)];
}

// Example usage
const arr = [5, 2, 9, 3, 7, 6, 1, 8, 4];
const sortedArr = quickSort(arr);
console.log(sortedArr);  // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]
