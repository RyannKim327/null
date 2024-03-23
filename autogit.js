function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    const pivot = arr[0];
    const left = [];
    const right = [];

    for (let i = 1; i < arr.length; i++) {
        arr[i] < pivot ? left.push(arr[i]) : right.push(arr[i]);
    }

    return [...quickSort(left), pivot, ...quickSort(right)];
}

// Example usage:
const arr = [5, 2, 9, 3, 6, 1, 8, 7, 4];
const sortedArray = quickSort(arr);
console.log(sortedArray);
