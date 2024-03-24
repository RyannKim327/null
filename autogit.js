function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    const pivot = arr[Math.floor(arr.length / 2)];
    const left = [];
    const right = [];

    for (let i = 0; i < arr.length; i++) {
        if (i === Math.floor(arr.length / 2)) {
            continue;
        }

        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    return [...quickSort(left), pivot, ...quickSort(right)];
}

// Example usage:
const arr = [3, 6, 8, 10, 1, 2, 1];
const sortedArr = quickSort(arr);
console.log(sortedArr); // Output: [1, 1, 2, 3, 6, 8, 10]
